//Can't back to previoous Page
//History API が使えるブラウザかどうかをチェック
  if (window.history && window.history.pushState) {
    //. ブラウザ履歴に１つ追加
    history.pushState("nohb", null, "");
    $(window).on("popstate", function (event) {
      //. このページで「戻る」を実行
      if (!event.originalEvent.state) {
        //. もう一度履歴を操作して終了
        history.pushState("nohb", null, "");
        return;
      }
    });
  }



/* Validation用 */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";//厳格モード

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert("未入力か不適切な入力があります");
        } else {

          /* canvasのデータを付加 */
          const board1 = document.querySelector("#board1");
          const board2 = document.querySelector("#board2");
          const canvas1 = board1.toDataURL("image/png");
          const canvas2 = board2.toDataURL("image/png");

          //ajaxの廃止
          form.method = "post";
          form.action = "/submit_beautySearch";
          
          var data1 = document.getElementById('data1')
          var data2 = document.getElementById('data2')

          if(data1==null||data2==null){
            data1 = document.createElement('input');
            data2 = document.createElement('input');
            data1.type = 'hidden'; //入力フォームが表示されないように
            data2.type = 'hidden'; //入力フォームが表示されないように
            data1.name = 'data1';
            data2.name = 'data2';
            data1.id = 'data1';
            data2.id = 'data2';
          }

          data1.value = canvas1;
          data2.value = canvas2;
          form.appendChild(data1);
          form.appendChild(data2);
          
          form.submit();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();