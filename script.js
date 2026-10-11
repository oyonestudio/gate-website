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
<<<<<<< HEAD
    { title: "寿司", date: "2026.06.08", id: "1vqFILksKUBWA-S5AS8W4CgkiFySyWgEF" },
    { title: "外壁の実装", date: "2026.06.11", id: "1dZJomjM0dByI3-hify9enljPUrLvj2y3" },
    { title: "実家の廊下", date: "2026.06.11", id: "1ysZNuSmunFguoMg5jXdvHrhBTNAFfrvO" },
    { title: "およねターンテーブル作成", date: "2026.06.12", id: "1O_0EKDLXWNIEfy12ZuIodXaysjjSp1fs" },
    { title: "実家バックルーム", date: "2026.06.15", id: "1RyOjYdMorp4LTBRuRw3SCvnLi1-Uwmrn" },
    { title: "千手観音", date: "2026.06.15", id: "1CbSuwYFMyYqWt4bzNyGsdG9fgjDCqWIr" },
    { title: "床の穴", date: "2026.06.17", id: "1g03qskZ8n3_UHruKM2KR6suBEnJQmNE0" },
    { title: "エレベーター実装", date: "2026.06.18", id: "1X-PhaTyHaKZPl5FooW0rfpnyqvhJixgk" },
    { title: "団地", date: "2026.06.22", id: "1-4VnPbXW8bXw3jciE1k3T2mQOaFP1wJD" },
    { title: "団地実装", date: "2026.06.25", id: "1NfcrutbXIctq0UpMZSEXGYfoP8TcMj7h" },
    { title: "サッシ実装", date: "2026.06.25", id: "13XUiwbcSzC7NEfl7HT4I8_LJkgvos2cu" },
    { title: "団地の外", date: "2026.06.27", id: "10-lr4ZhzwEJuJEQTojCZW5XbsNTb8U4_" },
    { title: "洗濯かご実装", date: "2026.06.29", id: "1oSlfFliP-8pO2ppKnXa-W7HW-_29apZ4" },
    { title: "ベランダ", date: "2026.06.29", id: "1o43NlSU32VvTWxBmuYZ8myFSgamaa0qm" },
    { title: "ベランダ2", date: "2026.06.29", id: "1IF22KujwhGtbtO_aEdF4QaKQYJSPmEZn" },
    { title: "ダイヤル式鍵実装", date: "2026.07.03", id: "1nH3dwu2Nn46AvdHE8H35aewcUz1_Sc8V" },
    { title: "双眼鏡実装", date: "2026.07.05", id: "1JreabvN7bLFPL4m5_BNptZ8lwZDZ-dTw" },
    { title: "昭和家具類実装", date: "2026.07.08", id: "1SuwPwRiPUUoNLEdr3GJEtk4G-yjoW0Ht" },
    { title: "ロボットから逃げる実装", date: "2026.07.09", id: "1wPycXH45OAyLuNTQS58bbNPMnODYsrIQ" },
    { title: "水や火の実装", date: "2026.07.10", id: "1jT0p63DaWgE1lclBMA13Pvn3l2d-jr2e" },
    { title: "縦書きの心の声", date: "2026.07.15", id: "1cHDrRv6gVKC7QcDuAapWZJomLEmcYw-N" },
    { title: "空間トリガーでＵＩ", date: "2026.07.16", id: "10bgJ_b_n1IcuWulg4pNt_GOED1r6DbGk" },
    { title: "インタラクト類実装", date: "2026.07.17", id: "1IRKaFu9hoE1Z1tj9hIBEtcmn_uhsxBtZ" },
    { title: "靴下投下", date: "2026.07.18", id: "1mtVjO1HBphGz308jPB5nLTYDkH9p5wO1" },
    { title: "ラーメンのタスク", date: "2026.07.25", id: "1_BYH4Q988X1U6h4hg_TSsx585zgDnk94" },
    { title: "looptools", date: "2026.07.26", id: "1Nf5IJEpOhxHRScOYPX5rvEldkGn1d5ax" },
    { title: "掴みの実装", date: "2026.07.28", id: "1zyrxPosH1z6DrHmybw4Sbrq-uFyAlKse" },
    { title: "歯車の実装", date: "2026.07.30", id: "1oLpiKrDtkMkilV_2hILf8gCEOJBkBFl5" },
    { title: "隣人子供観察", date: "2026.07.31", id: "1nx-r95NSapyfcUzVswrbzRTjbsAdxcLw" },
    { title: "漫画吹き出しUI", date: "2026.08.03", id: "1JvxYFgarPZ79xJFHf_zsXsiBxt8AAh0A" },
    { title: "インタラクト変更", date: "2026.08.03", id: "1anIlzipYly7HP5b7ieuZUKh5lPX-_sXM" },
    { title: "日本ぽいインタラクト改", date: "2026.08.05", id: "1cXB8RLjAj0ejr_-UCNBaD3kN09FJ-bhT" },
    { title: "掴み演出実装", date: "2026.08.07", id: "1J1KG539x4rlTJnKWFdnpzD34tWl5muG6" },
    { title: "動く漫画風実装", date: "2026.08.15", id: "15bln8Khc9-_2884pODZE8l-U5y3NJUpt" },
    { title: "漫画風銃", date: "2026.08.18", id: "1r_C6KymJA_ldyD5NeJ0uTqEIaIDc4xi-" },
    { title: "敵の実装", date: "2026.08.23", id: "11ndld322U1i1krRWg-Bnupah6oJa27lh" },
    { title: "レトロな世界実装", date: "2026.08.24", id: "1GubsnDExrqqGMSbCfSseGKfBN3mm9ZQP" },
    { title: "パリィの実装", date: "2026.08.25", id: "1Br_tKNxlLuFyMhhpqCzd4d3oaE35dWlc" },
    { title: "スロット全回復", date: "2026.08.30", id: "1EDuU3l9IDezz2pqkMD2U8w7QwXSqkPc2" },
    { title: "レトロな戦い", date: "2026.08.30", id: "1m1g0sVdA4ncA-V9xP8X1bbLKm9v-S1-e" },
    { title: "アパートモデリング", date: "2026.09.01", id: "1vTAXRZZy4dSKwMU3V0v3vdoZdXvkw-SI" },
    { title: "窓ガラス実装", date: "2026.09.02", id: "1oY-81HnFtt0UaHJMWoFpVNTWZqlkv-bQ" },
    { title: "民家の内部実装", date: "2026.09.02", id: "1QgehfgoqyE17i8Z7jperi7Ykmxq6W6R_" },
    { title: "スライム実装", date: "2026.09.04", id: "1u4c2ZJrB_5PeW-3D5_NsoOT1sjX7I-Vd" },
    { title: "百足", date: "2026.09.04", id: "1y5nwwE7L0GvkmP0mvwGFTCI6jcIBtY7d" },
    { title: "多言語対応", date: "2026.09.06", id: "1TtW74a0n4rV5lgWnnyUDctFDxcFGAdTd" },
    { title: "ラジオ実装", date: "2026.09.09", id: "1UBBYV2_v4kuL6LZzWyn0LTbqjD35LCE-" },
    { title: "核爆発ガラス散る", date: "2026.09.09", id: "1SdlX7u88ijNIeLySUt8Of0Bjcqf7YUmP" },
    { title: "世界観構築", date: "2026.09.09", id: "1zzlW12XWd1E0EUgAE9zm0rYAH23_l1Mu" },
    { title: "タイトル画面変更", date: "2026.09.10", id: "1OYK6Hh9Xqvn7RUDSe7slWQvbmt63uI7x" },
    { title: "パリィポイントが使えるお店", date: "2026.09.14", id: "1O2RzT0Gkxbf28b2nypahz4L1WtnJHdT8" },
    { title: "ストアとセーブ", date: "2026.09.18", id: "1vPC28SqCO2FxOFKSPl48IBHYRJnyCkP2" },
    { title: "エアシューター演出", date: "2026.09.19", id: "1yMCQpQWG8wy4QxCFEuLRMqGdzqcV6Jsv" },
    { title: "団地の門ギミック", date: "2026.09.23", id: "1NLky-28g86TReQFRN8Mu51ZWQ8RgCsor" },
    { title: "召喚の儀式", date: "2026.09.23", id: "1_wn3CVuMDEtS_mkkOwtpeu-73_gdwCSU" },
    { title: "ダイジェスト1", date: "2026.09.29", id: "1gb7bk7wyNKc9UD0W1RH5Ni3W0TcnyjTz" },
    { title: "ダイジェスト2", date: "2026.09.29", id: "1Td5ROqLZ_sPGoSsxlDFcu2preuk6fL7V" },
  ];
=======
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
    }
];
>>>>>>> ec70936 (Serve development videos through the OYONE YouTube channel)

  const grid = document.getElementById('devlogGrid');
  const frag = document.createDocumentFragment();

  // Googleドライブの動画は、外部サイトの <video> からは再生できない
  // (Google が Cross-Origin-Resource-Policy: same-site を付けているため)。
  // 埋め込みプレイヤーを使うしかないので、せめてクリックの回数を減らす。
  //
  // 以前は「自前の▶を押す → プレイヤーが出る → プレイヤーの再生を押す」の
  // 2回押しで、1回目で始まらないため再生できないように見えていた。
  // 画面に近づいた時点でプレイヤーを先に出しておけば、最初の1クリックで再生される。
  const players = [];

  const mount = (player) => {
    if (player.dataset.mounted === '1') return;
    player.dataset.mounted = '1';
    player.innerHTML =
      '<iframe src="https://drive.google.com/file/d/' + player.dataset.id + '/preview"' +
      ' title="' + player.dataset.title + '" allow="autoplay" loading="lazy"></iframe>';
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
<<<<<<< HEAD
    player.dataset.id = item.id;
    player.dataset.title = item.title;
    player.dataset.mounted = '0';
    player.innerHTML = '<span class="devlog-standby"></span>';

    const meta = document.createElement('div');
    meta.className = 'devlog-meta';
    meta.innerHTML = `<p class="devlog-date">${item.date}</p><p class="devlog-title-item">${item.title}</p>`;
=======
    player.style.backgroundImage = `url(https://i.ytimg.com/vi/${item.id}/hqdefault.jpg)`;
    player.style.backgroundSize = 'cover';
    player.style.backgroundPosition = 'center';
    player.innerHTML = '<button type="button" class="devlog-play" aria-label="再生">▶</button>';

    player.addEventListener('click', () => {
      if (player.classList.contains('is-playing')) return;
      stopAllPlayers();
      player.classList.add('is-playing');
      player.innerHTML = `
        <iframe src="https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy" title="${item.title}の開発動画"></iframe>
        <div class="devlog-loading"><span>読み込み中...</span></div>
      `;
      const loadingEl = player.querySelector('.devlog-loading');
      setTimeout(() => { loadingEl.classList.add('is-hidden'); }, 2500);
    });

    const meta = document.createElement('div');
    meta.className = 'devlog-meta';
    const date = document.createElement('p'); date.className = 'devlog-date'; date.textContent = item.date;
    const title = document.createElement('p'); title.className = 'devlog-title'; title.textContent = item.title;
    meta.append(date, title);
>>>>>>> ec70936 (Serve development videos through the OYONE YouTube channel)

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
