$(function() {
  history.pushState(null, null, null); //ブラウザバック無効化
  //ブラウザバックボタン押下時
  $(window).on("popstate", function (event) {
    history.pushState(null, null, null);
    window.alert('前のページに戻る場合、戻るボタンから戻ってください。');
  });
}); 

function backBeautySearch(){
  var form = document.getElementById("beautySearch_confirm")
  //post
  form.method = "post";
  form.action = "/beautySearch";
  form.submit();
}

function nextBeautySearch(){
  var form = document.getElementById("beautySearch_confirm")
  //post
  form.method = "post";
  form.action = "/submit_beautySearch";
  form.submit();
}

