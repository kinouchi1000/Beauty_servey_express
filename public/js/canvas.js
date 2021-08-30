/* 修正版 */


//canvas準備
const board1 = document.getElementById("board1");
const board2 = document.getElementById("board2");
const ctx1 = board1.getContext("2d");
const ctx2 = board2.getContext("2d");

//変数宣言
//canvas1
const width1 = 570;
const height1 = 442;
var moveflg1 = 0; 
var Xpoint1,Ypoint1;
//canvas2
const width2 = 292;
const height2 = 393;
var moveflg2 = 0; 
var Xpoint2,Ypoint2;

//共通変数宣言
var cnvColor = "rgba(0,0,0,1)"; //線の色
var cnvBold = "5"; //線の太さ
//背景のセット
setBg1();
setBg2();

//Canvas1
// PC対応
board1.addEventListener('mousedown', startPoint1, false);
board1.addEventListener('mousemove', movePoint1, false);
board1.addEventListener('mouseup', endPoint1, false);
// スマホ対応
board1.addEventListener('touchstart', startPoint1, false);
board1.addEventListener('touchmove', movePoint1, false);
board1.addEventListener('touchend', endPoint1, false);

//Canvas2
// PC対応
board2.addEventListener('mousedown', startPoint2, false);
board2.addEventListener('mousemove', movePoint2, false);
board2.addEventListener('mouseup', endPoint2, false);
// スマホ対応
board2.addEventListener('touchstart', startPoint2, false);
board2.addEventListener('touchmove', movePoint2, false);
board2.addEventListener('touchend', endPoint2, false);

//スタート
function startPoint1(e){
  e.preventDefault();
  ctx1.beginPath();
 
  Xpoint1 = e.layerX;
  Ypoint1 = e.layerY;
   
  ctx1.moveTo(Xpoint1, Ypoint1);
}
function startPoint2(e){
  e.preventDefault();
  ctx2.beginPath();
 
  Xpoint2 = e.layerX;
  Ypoint2 = e.layerY;
   
  ctx2.moveTo(Xpoint2, Ypoint2);
}

//Move
function movePoint1(e){
  if(e.buttons === 1 || e.witch === 1 || e.type == 'touchmove')
  {
    Xpoint1 = e.layerX;
    Ypoint1 = e.layerY;
    moveflg1 = 1;
     
    ctx1.lineTo(Xpoint1, Ypoint1);
    ctx1.lineCap = "round";
    ctx1.lineWidth = cnvBold * 2;
    ctx1.strokeStyle = cnvColor;
    ctx1.stroke();
     
  }
}
function movePoint2(e){
  if(e.buttons === 1 || e.witch === 1 || e.type == 'touchmove')
  {
    Xpoint2 = e.layerX;
    Ypoint2 = e.layerY;
    moveflg2 = 1;
     
    ctx2.lineTo(Xpoint2, Ypoint2);
    ctx2.lineCap = "round";
    ctx2.lineWidth = cnvBold * 2;
    ctx2.strokeStyle = cnvColor;
    ctx2.stroke();
     
  }
}
//終了
function endPoint1(e)
{
 
    if(moveflg1 === 0)
    {
       ctx1.lineTo(Xpoint1-1, Ypoint1-1);
       ctx1.lineCap = "round";
       ctx1.lineWidth = cnvBold * 2;
       ctx1.strokeStyle = cnvColor;
       ctx1.stroke();
        
    }
    moveflg1 = 0;
}
function endPoint2(e)
{
 
    if(moveflg === 0)
    {
       ctx2.lineTo(Xpoint2-1, Ypoint2-1);
       ctx2.lineCap = "round";
       ctx2.lineWidth = cnvBold * 2;
       ctx2.strokeStyle = cnvColor;
       ctx2.stroke();
    }
    moveflg2 = 0;
}
$("#clear1").click(function (){
  if(confirm('Canvasを初期化しますか？'))
  {
      ctx1.clearRect(0, 0, ctx1.canvas.clientWidth, ctx1.canvas.clientHeight);
      setBg1();
  };
})
$("#clear2").click(function (){
  if(confirm('Canvasを初期化しますか？'))
  {
      ctx2.clearRect(0, 0, ctx2.canvas.clientWidth, ctx2.canvas.clientHeight);
      setBg2();
  }
})


////おそらく問題なし
//canvas1 背景をセット
function setBg1() {
  //画像読み込み
  const chara = new Image();
  chara.src = "/image/Chin.png";
  chara.onload = function () {
    ctx1.drawImage(chara, 0, 0, width1, height1);
  };
}
//canvas2 背景セット
function setBg2() {
  //画像読み込み
  const chara = new Image();
  chara.src = "/image/woman.png";
  chara.onload = function () {
    ctx2.drawImage(chara, 0, 0, width2, height2);
  };
}

/* 顔イラスト表示 */
// canvas準備
const Face = document.querySelector("#Face"); //getElementById()等でも可。オブジェクトが取れれば良い。
const ctx = Face.getContext("2d");

// 画像読み込み
const chara = new Image();
chara.src = "/image/Face.png"; // 画像のURLを指定
chara.onload = () => {
  ctx.drawImage(chara, 0, 0, 335, 526);
};

