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
          var data = $("form").serializeArray(); // ①form to json
          data = parseJson(data); // ②json to 欲しい形

          /* canvasのデータを付加 */
          const board1 = document.querySelector("#board1");
          const board2 = document.querySelector("#board2");
          const canvas1 = board1.toDataURL("image/png");
          const canvas2 = board2.toDataURL("image/png");

          data["data1"] = canvas1;
          data["data2"] = canvas2;

          // ③送信
          $.ajax({
            type: "POST",
            url: "/submit_beauty",
            dataType: "text",
            contentType: "application/json",
            scriptCharset: "utf-8",
            data: JSON.stringify(data),
          })
            .done(function (res) {
              location.href = "/confirm";
            })
            .fail(function (err) {
              console.log(err);
            });
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
