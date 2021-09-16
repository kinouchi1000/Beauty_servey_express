$(function() {
  history.pushState(null, null, null); //ブラウザバック無効化
  //ブラウザバックボタン押下時
  $(window).on("popstate", function (event) {
    history.pushState(null, null, null);
    window.alert('前のページに戻る場合、戻るボタンから戻ってください。');
  });
}); 

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
