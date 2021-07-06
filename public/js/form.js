const job_other_item = document.getElementById("job_other_item");
const job_other_form = document.getElementById("job_other");
const job_select = document.getElementById("job");

/* なぜかjob_other_itemがnullになっている。 */
job_other_item.style.display = "none";

job_select.onchange = function () {
  if (job_select.value === "その他") {
    job_other_item.style.display = "block";
    job_other_form.removeAttribute("disabled");
  } else {
    job_other_item.style.display = "none";
    job_other_form.setAttribute("disabled", true);
  }
};

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
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
