document.addEventListener('DOMContentLoaded', () => {

  /* ===== Mobile nav toggle ===== */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');

  navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
    });
  });

  /* ===== Hero parallax ===== */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const offset = Math.min(window.scrollY * 0.25, 120);
      hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    });
  }

  /* ===== To-top button ===== */
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('visible', window.scrollY > 480);
  });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ===== Screenshot lightbox ===== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('.shot').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.dataset.full;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  });

  /* ===== Dev log video gallery (Google Drive embed) ===== */
  const devlog = [
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
  ];

  const grid = document.getElementById('devlogGrid');
  const frag = document.createDocumentFragment();

  // クリックした動画だけを読み込み、他はプレースホルダーに戻すことで
  // 複数の動画が同時に再生されっぱなしになるのを防ぐ
  const stopAllPlayers = () => {
    grid.querySelectorAll('.devlog-player.is-playing').forEach(el => {
      el.classList.remove('is-playing');
      el.innerHTML = '<button type="button" class="devlog-play" aria-label="再生">▶</button>';
    });
  };

  // 新しい動画が一番上に来るように表示だけ逆順にする(配列自体は追加しやすいよう時系列順のまま)
  [...devlog].reverse().forEach(item => {
    const card = document.createElement('div');
    card.className = 'devlog-card';

    const player = document.createElement('div');
    player.className = 'devlog-player';
    player.innerHTML = '<button type="button" class="devlog-play" aria-label="再生">▶</button>';

    player.addEventListener('click', () => {
      if (player.classList.contains('is-playing')) return;
      stopAllPlayers();
      player.classList.add('is-playing');
      player.innerHTML = `<iframe src="https://drive.google.com/file/d/${item.id}/preview" allow="autoplay" loading="lazy"></iframe>`;
    });

    const meta = document.createElement('div');
    meta.className = 'devlog-meta';
    meta.innerHTML = `<p class="devlog-date">${item.date}</p><p class="devlog-title">${item.title}</p>`;

    card.appendChild(player);
    card.appendChild(meta);
    frag.appendChild(card);
  });

  grid.appendChild(frag);

});
