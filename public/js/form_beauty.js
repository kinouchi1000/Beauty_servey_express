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
        } else {
          /* formデータをjsonに変換 */
          // var data = $("form").serializeArray(); // ①form to json
          // data = parseJson(data); // ②json to 欲しい形

          /* canvasのデータを付加 */
          const board1 = document.querySelector("#board1");
          const board2 = document.querySelector("#board2");
          const canvas1 = board1.toDataURL("image/png");
          const canvas2 = board2.toDataURL("image/png");
          var data1 = document.createElement('input');
          var data2 = document.createElement('input');

          // data["data1"] = canvas1;
          // data["data2"] = canvas2;

          // // ③送信
          // $.ajax({
          //   type: "POST",
          //   url: "/submit_beauty",
          //   dataType: "text",
          //   contentType: "application/json",
          //   scriptCharset: "utf-8",
          //   data: JSON.stringify(data),
          // })
          //   .done(function (res) {
          //     location.href = "/confirm";
          //   })
          //   .fail(function (err) {
          //     console.log(err);
          //   });
          //ajaxの廃止
          form.method = "post";
          form.action = "/submit_beautySearch";

          data1.type = 'hidden'; //入力フォームが表示されないように
          data2.type = 'hidden'; //入力フォームが表示されないように
          data1.name = 'data1';
          data2.name = 'data2';
          data1.value = canvas1;
          data2.value = canvas2;

          document.body.appendChild(data1);
          document.body.appendChild(data2);
          form.submit();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// ②変換関数：json to 欲しい形
const parseJson = function (data) {
  var returnJson = {};
  for (idx = 0; idx < data.length; idx++) {
    returnJson[data[idx].name] = data[idx].value;
  }
  return returnJson;
};
