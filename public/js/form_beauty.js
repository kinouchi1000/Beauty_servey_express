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

          /* canvasのデータを付加 */
          const board1 = document.querySelector("#board1");
          const board2 = document.querySelector("#board2");
          const canvas1 = board1.toDataURL("image/png");
          const canvas2 = board2.toDataURL("image/png");

          //ajaxの廃止
          form.method = "post";
          form.action = "/submit_beautySearch";
          
          var data1 = document.createElement('input');
          var data2 = document.createElement('input');
          data1.type = 'hidden'; //入力フォームが表示されないように
          data2.type = 'hidden'; //入力フォームが表示されないように
          data1.name = 'data1';
          data2.name = 'data2';
          data1.value = canvas1;
          data2.value = canvas2;
          form.appendChild(data1)
          form.appendChild(data2)

          //document.body.appendChild(form);
          form.submit();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();