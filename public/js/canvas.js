/* canvas1 */
window.onload = () => {
  //canvas準備
  const board1 = document.getElementById("board1");
  const board2 = document.getElementById("board2");
  const ctx1 = board1.getContext("2d");
  const ctx2 = board2.getContext("2d");

  //変数宣言
  //canvas1
  const width1 = 570;
  const height1 = 442;
  var clickFlg1 = 0; //1：クリック開始　2:クリック中
  //canvas2
  const width2 = 292;
  const height2 = 393;
  var clickFlg2 = 0; //1：クリック開始　2:クリック中

  //共通変数宣言
  var cnvColor = "rgba(0,0,0,1)"; //線の色
  var cnvBold = "5"; //線の太さ
  //背景のセット
  setBg1();
  setBg2();

  //canvas上でのイベント(canvas1)
  $("#board1")
    .mousedown(function () {
      clickFlg1 = 1; // マウス押下開始
    })
    .mouseup(function () {
      clickFlg1 = 0; // マウス押下終了
    })
    .mouseleave(function () {
      clickFlg1 = 0; // マウス画面外遷移
    })
    .mousemove(function (e) {
      // マウス移動処理
      if (!clickFlg1) return false;
      draw1(e.offsetX, e.offsetY);
    });
  //canvas上でのイベント(canvas2)
  $("#board2")
    .mousedown(function () {
      clickFlg2 = 1; // マウス押下開始
    })
    .mouseup(function () {
      clickFlg2 = 0; // マウス画面外遷移
    })
    .mouseleave(function () {
      clickFlg2 = 0; // マウス押下終了
    })
    .mousemove(function (e) {
      // マウス移動処理
      if (!clickFlg2) return false;
      draw2(e.offsetX, e.offsetY);
    });

  //描画処理
  function draw1(x, y) {
    ctx1.lineWidth = cnvBold;
    ctx1.strokeStyle = cnvColor;
    // 初回処理の判定
    if (clickFlg1 == "1") {
      clickFlg1 = "2";
      ctx1.beginPath();
      ctx1.lineCap = "round"; //　線を角丸にする
      ctx1.moveTo(x, y);
    } else {
      ctx1.lineTo(x, y);
    }
    ctx1.stroke();
  }
  //描画処理
  function draw2(x, y) {
    ctx2.lineWidth = cnvBold;
    ctx2.strokeStyle = cnvColor;
    // 初回処理の判定
    if (clickFlg2 == "1") {
      clickFlg2 = "2";
      ctx2.beginPath();
      ctx2.lineCap = "round"; //　線を角丸にする
      ctx2.moveTo(x, y);
    } else {
      ctx2.lineTo(x, y);
    }
    ctx2.stroke();
  }

  // 描画クリア
  $("#clear1").click(function () {
    ctx1.clearRect(0, 0, width1, height1);
    setBg1();
  });
  // 描画クリア
  $("#clear2").click(function () {
    ctx2.clearRect(0, 0, width2, height2);
    setBg2();
  });

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
};
