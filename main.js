'use strict';

const C_WIDTH  = 1000; //キャンパスの幅
const C_HEIGHT = 1000; //キャンパスの高さ

let gMap;             //マップの画像

//キャンパス画面の描画
function Main()
{
  const ca = document.getElementById('main');
  const  g = ca.getContext('2d');
  
  g.fillStyle = 'black';
  g.fillRect(30,0,C_WIDTH,C_HEIGHT);

  g.drawImage(gMap,30,30);


};

window.onload = function()
{
  gMap = new Image();
  gMap.src = 'map.png';
  setInterval(function(){Main()},33);

}