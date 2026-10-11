document.addEventListener('DOMContentLoaded', () => {

  /* ===== Mobile nav toggle ===== */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');

  navToggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ===== To-top button ===== */
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('visible', window.scrollY > 480);
  });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });

  /* ===== Screenshot lightbox ===== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  let previousFocus;
  document.querySelectorAll('.shot').forEach(img => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'shot-button';
    button.setAttribute('aria-label', img.alt + 'を拡大');
    img.before(button); button.append(img);
    button.addEventListener('click', () => {
      previousFocus = button;
      lightboxImg.src = img.dataset.full; lightboxImg.alt = img.alt;
      lightbox.showModal(); document.body.style.overflow = 'hidden';
    });
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', e => {if(e.target === lightbox) lightbox.close();});
  lightbox.addEventListener('close', () => {document.body.style.overflow = ''; previousFocus?.focus();});

  /* ===== Dev log video gallery (YouTube embed) ===== */
  const devlog = [
    {
        "title": "steam「門　GATE」開発中。公式サイト公開。",
        "date": "YouTube公開動画",
        "id": "AL19dQRfXb4"
    },
    {
        "title": "steam「門GATE」紹介。",
        "date": "YouTube公開動画",
        "id": "bzxtQHXPmyY"
    },
    {
        "title": "steam「門GATE」開発中",
        "date": "YouTube公開動画",
        "id": "VbVvkaEfUj4"
    },
    {
        "title": "steam「門GATE」公式サイトもプロフィールから",
        "date": "YouTube公開動画",
        "id": "Sd7B7pUuy3w"
    },
    {
        "title": "詳細はプロフから(^^)steam「門GATE」",
        "date": "YouTube公開動画",
        "id": "b2yaixlFOK0"
    },
    {
        "title": "日本っぽさを全開にしたインタラクトの実装",
        "date": "YouTube公開動画",
        "id": "zQ-NCcYqNGQ"
    },
    {
        "title": "漫画の中を操作",
        "date": "YouTube公開動画",
        "id": "XWD508A8hp4"
    },
    {
        "title": "steam「門　GATE」体験版出します。",
        "date": "YouTube公開動画",
        "id": "B5y14Iq-NS0"
    },
    {
        "title": "steam「門GATE」リリース予定",
        "date": "YouTube公開動画",
        "id": "wlemOfYNgcM"
    },
    {
        "title": "ゲーム開発。「門GATE」",
        "date": "YouTube公開動画",
        "id": "rCi6vAP5Jhg"
    },
    {
        "title": "ババアとパリィ",
        "date": "YouTube公開動画",
        "id": "OV4qIqCJ8d8"
    },
    {
        "title": "「門GATE」steam開発中",
        "date": "YouTube公開動画",
        "id": "g0tNaBD4cPM"
    },
    {
        "title": "【パリィが気持ちいい】戦闘システムを実装してみた",
        "date": "YouTube公開動画",
        "id": "YsekjRSsEtE"
    },
    {
        "title": "ピエロの攻撃をパリィ！｜この戦闘システム、かなり面白い",
        "date": "YouTube公開動画",
        "id": "fScHEwD6XMk"
    },
    {
        "title": "「レトロな世界に新たな戦闘システムを実装」",
        "date": "YouTube公開動画",
        "id": "ZO1qp0-REn8"
    },
    {
        "title": "スロット全回復システム採用　steam「門　GATE」",
        "date": "YouTube公開動画",
        "id": "FHPK7skyVnU"
    },
    {
        "title": "ホラーゲーム用に昭和の古いアパートを作る【Blender】",
        "date": "YouTube公開動画",
        "id": "R85t-ZdeexY"
    },
    {
        "title": "窓ガラス制作から実装まで",
        "date": "YouTube公開動画",
        "id": "NzSwmPVl6ZQ"
    },
    {
        "title": "誰も見ないコンセントに全力を出す",
        "date": "YouTube公開動画",
        "id": "3h1WOeSXE_4"
    },
    {
        "title": "自作スライム、殴れるようになるまで",
        "date": "YouTube公開動画",
        "id": "n2HeyBUpr6U"
    },
    {
        "title": "壁を這う百足を作った",
        "date": "YouTube公開動画",
        "id": "MnXUWNchAck"
    },
    {
        "title": "英語と韓国語に対応させました",
        "date": "YouTube公開動画",
        "id": "JcyqeIJIJrw"
    },
    {
        "title": "レトロラジオを作る｜臨時速報が流れる電光掲示板【Blender】",
        "date": "YouTube公開動画",
        "id": "9HCmK0Xdj4I"
    },
    {
        "title": "電車の窓ガラスを割る｜爆発で砕ける破片304個【Blender】",
        "date": "YouTube公開動画",
        "id": "iI8tT0QQjNo"
    },
    {
        "title": "電車の車内をつくる｜つり革が揺れる漫画風の世界",
        "date": "YouTube公開動画",
        "id": "TXc86uW5L8Q"
    },
    {
        "title": "誰もいない電車で、ラジオが伝えた事【門GATE】",
        "date": "YouTube公開動画",
        "id": "ImDE9qz_dkQ"
    },
    {
        "title": "パリィで貯めたポイントで鍵を買ったら、テレビから出てきた【ホラーFPS GATE】",
        "date": "YouTube公開動画",
        "id": "e9dV4Vit5qU"
    },
    {
        "title": "自作ゲームの買い物画面とセーブ画面",
        "date": "YouTube公開動画",
        "id": "vm0FsnRdUMw"
    },
    {
        "title": "床からラブホのエアシューターが生えてくる",
        "date": "YouTube公開動画",
        "id": "oaQUnVX0cfE"
    },
    {
        "title": "双眼鏡で向かいの部屋をのぞいたら、目が合った",
        "date": "YouTube公開動画",
        "id": "kwysH2Q8SK4"
    },
    {
        "title": "鎖ぐるぐる巻きの門、鍵を挿したら溶けて消えた",
        "date": "YouTube公開動画",
        "id": "DrBVGZD3dJU"
    },
    {
        "title": "召喚の儀式",
        "date": "YouTube公開動画",
        "id": "HDQ-Cx_FfLg"
    },
    {
        "title": "漫画風な演出実装",
        "date": "YouTube公開動画",
        "id": "B1ttoxqiJAw"
    },
    {
        "title": "steam「門GATE」のプレイシーン",
        "date": "YouTube公開動画",
        "id": "thujcnwP0ZU"
    },
    {
        "title": "Blenderでほぼ全部自分で作った｜個人開発1年の記録｜門 GATE 開発映像集",
        "date": "YouTube公開動画",
        "id": "4gFTTWgZ0Go"
    },
    {
        "title": "昭和の団地で、未来のAIに立ち向かう｜門 GATE ダイジェスト1",
        "date": "YouTube公開動画",
        "id": "3GaFNvW7DXQ"
    },
    {
        "title": "昭和の町を探索し、自作の武器で戦う｜門 GATE ダイジェスト2",
        "date": "YouTube公開動画",
        "id": "fQppEAqHy5g"
    }
];

  const grid = document.getElementById('devlogGrid');
  const frag = document.createDocumentFragment();

  // Viewport-lazy YouTube players preserve one-click playback.
  const players = [];

  const mount = (player) => {
    if (player.dataset.mounted === '1') return;
    player.dataset.mounted = '1';
    const frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + player.dataset.id + '?rel=0';
    frame.title = player.dataset.title;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture';
    frame.allowFullscreen = true;
    frame.loading = 'lazy';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    player.replaceChildren(frame);
  };

  const unmount = (player) => {
    if (player.dataset.mounted !== '1') return;
    // 再生中のものは触らない(iframe に焦点があるかで判断する)
    const frame = player.querySelector('iframe');
    if (frame && document.activeElement === frame) return;
    player.dataset.mounted = '0';
    player.innerHTML = '<span class="devlog-standby"></span>';
  };

  // 新しい動画が一番上に来るように表示だけ逆順にする(配列自体は追加しやすいよう時系列順のまま)
  [...devlog].reverse().forEach(item => {
    const card = document.createElement('div');
    card.className = 'devlog-card';

    const player = document.createElement('div');
    player.className = 'devlog-player';
    player.dataset.id = item.id;
    player.dataset.title = item.title;
    player.dataset.mounted = '0';
    player.innerHTML = '<span class="devlog-standby"></span>';

    const meta = document.createElement('div');
    meta.className = 'devlog-meta';
    const date = document.createElement('p'); date.className = 'devlog-date'; date.textContent = item.date;
    const title = document.createElement('p'); title.className = 'devlog-title-item'; title.textContent = item.title;
    meta.append(date, title);

    card.appendChild(player);
    card.appendChild(meta);
    frag.appendChild(card);
    players.push(player);
  });

  grid.appendChild(frag);

  // 近づいたら出す / 遠ざかったらしまう(全部出しっぱなしにすると重いため)
  if ('IntersectionObserver' in window) {
    const near = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) mount(e.target); });
    }, { rootMargin: '400px 0px' });

    const far = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (!e.isIntersecting) unmount(e.target); });
    }, { rootMargin: '1800px 0px' });

    players.forEach(p => { near.observe(p); far.observe(p); });
  } else {
    players.forEach(mount);
  }
});
