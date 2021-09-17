$(function() {
  history.pushState(null, null, null); //ブラウザバック無効化
  //ブラウザバックボタン押下時
  $(window).on("popstate", function (event) {
    history.pushState(null, null, null);
    window.alert('前のページに戻る場合、戻るボタンから戻ってください。');
  });
}); 

function backBMCMembership(){
  var form = document.getElementById("BMCMembership_confirm")
  //post
  form.method = "post";
  form.action = "/BMCMembership";
  form.submit();
}

function nextBMCMembership(){

  var form = document.getElementById("BMCMembership_confirm")
  //post
  form.method = "post";
  form.action = "/submit_BMCMembership";
  form.submit();
}

