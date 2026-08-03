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

  /* ===== Dev log video gallery ===== */
  // 元動画は Downloads\SNS用 に置いたまま参照(容量が大きいためコピーしない)
  const VIDEO_BASE = '../../../Downloads/SNS用/';

  const devlog = [
    { title: "寿司", date: "2026.06.08", file: "寿司.mp4" },
    { title: "外壁の実装", date: "2026.06.11", file: "外壁の実装.mp4" },
    { title: "実家の廊下", date: "2026.06.11", file: "実家の廊下.mp4" },
    { title: "およねターンテーブル作成", date: "2026.06.12", file: "およねターンテーブル作成.mp4" },
    { title: "実家バックルーム", date: "2026.06.15", file: "実家バックルーム.mp4" },
    { title: "千手観音", date: "2026.06.15", file: "千手観音.mp4" },
    { title: "床の穴", date: "2026.06.17", file: "床の穴.mp4" },
    { title: "エレベーター実装", date: "2026.06.18", file: "エレベーター実装.mp4" },
    { title: "社宅", date: "2026.06.22", file: "社宅.mp4" },
    { title: "社宅実装", date: "2026.06.25", file: "社宅実装.mp4" },
    { title: "サッシ実装", date: "2026.06.25", file: "サッシ実装.mp4" },
    { title: "社宅の外", date: "2026.06.27", file: "社宅の外.mp4" },
    { title: "洗濯かご実装", date: "2026.06.29", file: "洗濯かご実装.mp4" },
    { title: "ベランダ", date: "2026.06.29", file: "ベランダ.mp4" },
    { title: "ベランダ2", date: "2026.06.29", file: "ベランダ2.mp4" },
    { title: "ダイヤル式鍵実装", date: "2026.07.03", file: "ダイヤル式鍵実装.mp4" },
    { title: "双眼鏡実装", date: "2026.07.05", file: "双眼鏡実装.mp4" },
    { title: "浜辺さん", date: "2026.07.08", file: "浜辺さん.mp4" },
    { title: "昭和家具類実装", date: "2026.07.08", file: "昭和家具類実装.mp4" },
    { title: "ロボットから逃げる実装", date: "2026.07.09", file: "ロボットから逃げる実装.mp4" },
    { title: "ドクター0＿100＿300", date: "2026.07.10", file: "ドクター0＿100＿300.mp4" },
    { title: "走行シーンN７００等", date: "2026.07.10", file: "走行シーンN７００等.mp4" },
    { title: "水や火の実装", date: "2026.07.10", file: "水や火の実装.mp4" },
    { title: "縦書きの心の声", date: "2026.07.15", file: "縦書きの心の声.mp4" },
    { title: "空間トリガーでＵＩ", date: "2026.07.16", file: "空間トリガーでＵＩ.mp4" },
    { title: "インタラクト類実装", date: "2026.07.17", file: "インタラクト類実装.mp4" },
    { title: "靴下投下", date: "2026.07.18", file: "靴下投下.mp4" },
    { title: "ラーメンのタスク", date: "2026.07.25", file: "ラーメンのタスク.mp4" },
    { title: "looptools", date: "2026.07.26", file: "looptools.mp4" },
    { title: "掴みの実装", date: "2026.07.28", file: "掴みの実装.mp4" },
    { title: "歯車の実装", date: "2026.07.30", file: "歯車の実装.mp4" },
    { title: "隣人子供観察", date: "2026.07.31", file: "隣人子供観察.mp4" },
    { title: "漫画吹き出しUI", date: "2026.08.03", file: "漫画吹き出しＵＩ.mp4" },
    { title: "インタラクト変更", date: "2026.08.03", file: "インタラクト変更.mp4" },
  ];

  const grid = document.getElementById('devlogGrid');
  const frag = document.createDocumentFragment();

  // 新しい動画が一番上に来るように表示だけ逆順にする(配列自体は追加しやすいよう時系列順のまま)
  [...devlog].reverse().forEach(item => {
    const card = document.createElement('div');
    card.className = 'devlog-card';

    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'none';
    video.src = VIDEO_BASE + encodeURIComponent(item.file);

    const meta = document.createElement('div');
    meta.className = 'devlog-meta';
    meta.innerHTML = `<p class="devlog-date">${item.date}</p><p class="devlog-title">${item.title}</p>`;

    card.appendChild(video);
    card.appendChild(meta);
    frag.appendChild(card);
  });

  grid.appendChild(frag);

});
