// History API が使えるブラウザかどうかをチェック
// if (window.history && window.history.pushState) {
//   //. ブラウザ履歴に１つ追加
//   history.pushState("nohb", null, "");
//   $(window).on("popstate", function (event) {
//     //. このページで「戻る」を実行
//     if (!event.originalEvent.state) {
//       //. もう一度履歴を操作して終了
//       history.pushState("nohb", null, "");
//       return;
//     }
//   });
// }
function BackToPage(){
  history.back(-1);
  return false
}

function backMonshin(){
  var form = document.getElementById("monshin_confirm")
  //post
  form.method = "post";
  form.action = "/monshin";
  form.submit();
}

function submitMonshin(){

  var data = $("form").serializeArray(); // ①form to json
  data = parseJson(data); // ②json to 欲しい形
  //post
  $.ajax({
    type: "POST",
    url: "/submit_monshin",
    dataType: "text",
    contentType: "application/json",
    scriptCharset: "utf-8",
    data: JSON.stringify(data),
  })
    .done(function (res) {
      location.href = "BMCMembership";
    })
    .fail(function (err) {
      console.log(err);
      alert("送信に失敗しました。");
    });
}


// ②変換関数：json to 欲しい形
const parseJson = function (data) {
  var returnJson = {};
  for (idx = 0; idx < data.length; idx++) {
    returnJson[data[idx].name] = data[idx].value;
  }
  return returnJson;
};
