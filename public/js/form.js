/* Validation用 */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        //バリデーションエラーが無いか確認
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        //form にwas-validatedクラスを付加
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// canvasを画像で保存
/* $("#download").click(function(){
  canvas = document.getElementById('canvas');
  var base64 = canvas.toDataURL("image/jpeg");
  document.getElementById("download").href = base64;
}); */
