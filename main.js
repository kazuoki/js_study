document.getElementById('box').textContent='こんばんは';
// document.getElementById('box').textContent=new Date().toLocaleString();
// document.getElementById('box').textContent='abc'+'def';
// document.getElementById('box').textContent = 1+ 1;
// const button = document.getElementById('my-button');
// button.addEventListener('click', () => {

// });

const button = document.getElementById('my-button');

button.addEventListener('click', () => {
  alert('押された！');
});

const box = document.getElementById('box');

// マウスが乗った時
box.addEventListener(
  'mouseenter',
  // e.targetはイベント発生元の要素（<div id="box">）
  (e) => {
    e.target.textContent = 'マウスが乗った！';
  }
);


// マウスが離れた時
box.addEventListener(
  'mouseleave',
  (e) => {
  e.target.textContent = 'マウスが離れた！';
  }
);