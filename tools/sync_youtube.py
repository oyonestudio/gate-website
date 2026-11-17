"""OYONE studio の YouTube チャンネルの新着を、サイトの開発記録（script.js の devlog）に足す。

GitHub Actions（.github/workflows/youtube-sync.yml）から6時間ごとに動く。手元でも python tools/sync_youtube.py で動く。
- サイトにまだ無い動画だけを、一覧の末尾に足す（すでにある id は二度と足さない）
- 題名の末尾のハッシュタグ（#steam など）は外す
- 手で直した題名・並びには触らない
"""
import html
import json
import pathlib
import re
import sys
import urllib.request

CHANNEL_ID = "UCCpuqvPPm6REh76GzX1f_8Q"   # OYONE studio（@オヨネスタジオ）
FEED = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
SCRIPT = pathlib.Path(__file__).resolve().parent.parent / "script.js"


def fetch_feed():
    req = urllib.request.Request(FEED, headers={"User-Agent": "gate-website-sync"})
    with urllib.request.urlopen(req, timeout=30) as r:
        xml = r.read().decode("utf-8")
    items = []
    for e in re.findall(r"<entry>(.*?)</entry>", xml, re.S):
        vid = re.search(r"<yt:videoId>(.*?)</yt:videoId>", e).group(1)
        title = html.unescape(re.search(r"<title>(.*?)</title>", e).group(1))
        published = re.search(r"<published>(.*?)</published>", e).group(1)[:10]
        items.append((published, vid, title))
    items.sort()   # 古い順に足す（一覧は古い→新しいの並び）
    return items


def clean(title):
    t = re.sub(r"\s*[#＃]\S+", "", title).strip()
    return t or title.strip()


def main():
    src = SCRIPT.read_text(encoding="utf-8")
    start = src.index("const devlog = [")
    end = src.index("\n];", start)
    known = set(re.findall(r'"id":\s*"([A-Za-z0-9_-]{11})"', src[start:end]))
    new = [(p, v, t) for p, v, t in fetch_feed() if v not in known]
    if not new:
        print("新着なし")
        return 0
    add = ""
    for p, v, t in new:
        entry = {"title": clean(t), "date": p.replace("-", ".") + " YouTube公開", "id": v}
        body = json.dumps(entry, ensure_ascii=False, indent=4).replace("\n", "\n    ")
        add += ",\n    " + body
        print("追加:", p, v, entry["title"])
    SCRIPT.write_text(src[:end] + add + src[end:], encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())
