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


// id"box"取得し変数boxへ代入
const box = document.getElementById('box');

// マウスが乗った時のテキスト
box.addEventListener('mouseenter',(e) => {
  e.target.textContent=('つかれたよん');
})


// マウス離れた時のテキスト
box.addEventListener('mouseleave',(e) => {
  e.target.textContent=('お疲れ様');
})


// セレクトの切り替え
const select = document.getElementById('my-select');

select.addEventListener('change',(e) => {
  console.log('value:',e.target.value);
});


// フォームの送信
const input = document.getElementById('input-word');
const form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('value: ', input.value);
});