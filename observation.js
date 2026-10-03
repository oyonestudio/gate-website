(() => {
  const range = document.querySelector('#frequency');
  const other = document.querySelector('#otherWorld');
  const boundary = document.querySelector('#boundary');
  const button = document.querySelector('#crossBoundary');
  const setWorld = () => {
    const value = Number(range.value);
    other.style.clipPath = `inset(0 ${100-value}% 0 0)`;
    boundary.style.left = `${value}%`;
    boundary.hidden = value === 0 || value === 100;
    document.querySelector('#signalValue').textContent = `異界率 ${String(value).padStart(2,'0')}%`;
    document.querySelector('#screenType').textContent = value === 0 ? 'GAMEPLAY / 実際のゲーム画面' : value === 100 ? 'KEY VISUAL / イメージビジュアル' : 'GAMEPLAY ↔ KEY VISUAL';
    button.textContent = value >= 50 ? '現実へ戻る ↙' : '異界を覗く ↗';
    range.setAttribute('aria-valuetext', `異界率 ${value}パーセント`);
  };
  range.addEventListener('input', setWorld);
  button.addEventListener('click', () => {range.value = Number(range.value)>=50 ? 0 : 100;setWorld();});
  setWorld();
  document.querySelectorAll('.building-floor').forEach(floor => {
    const showFloor = () => document.querySelector('#floorValue').textContent = floor.dataset.floor;
    floor.addEventListener('pointerenter', showFloor); floor.addEventListener('focus', showFloor);
  });
  const room = document.querySelector('#secretRoom');
  const entrance = document.querySelector('#unlistedRoom');
  function openRoom(){if(!room.open)room.showModal();document.body.style.overflow='hidden';}
  entrance.addEventListener('click',openRoom);
  room.querySelector('.secret-close').addEventListener('click',()=>room.close());
  room.addEventListener('click',e=>{if(e.target===room)room.close();});
  room.addEventListener('close',()=>{document.body.style.overflow='';entrance.focus();});
  document.querySelector('#shareRoom').addEventListener('click',async()=>{
    const url='https://oyonestudio.github.io/gate-website/#room000';
    try{await navigator.clipboard.writeText(url);document.querySelector('#shareStatus').textContent='入口のURLをコピーしました。';}
    catch{document.querySelector('#shareStatus').textContent=url;}
  });
  if(location.hash==='#room000')openRoom();
  window.addEventListener('hashchange',()=>{if(location.hash==='#room000')openRoom();});
})();
