//Can't back to previoous Page
//History API が使えるブラウザかどうかをチェック

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




const job_other_item = document.getElementById("job_other_item");
const job_other_form = document.getElementById("job_other");
const job_select = document.getElementById("job")

/* なぜかjob_other_itemがnullになっている。 */
job_other_item.style.display = "none";

job_select.onchange = function () {
  if (job_select.value === "その他") {
    job_other_item.style.display = "block"
    job_other_form.removeAttribute("disabled");
  } else {
    job_other_item.style.display = "none";
    job_other_form.setAttribute("disabled", true);
  }
};
//最初のチェック項目ハンドラ
function agreementChange(){
  agreement = $('#agreement')
  if (agreement.prop("checked")) {
    document.BMC.name.removeAttribute("disabled");
    document.BMC.hurigana.removeAttribute("disabled");
    document.BMC.birthDate.removeAttribute("disabled");
    document.BMC.age.removeAttribute("disabled");
    document.getElementById("sex_man").removeAttribute("disabled");
    document.getElementById("sex_woman").removeAttribute("disabled");
    document.BMC.zip11.removeAttribute("disabled");
    document.BMC.addr11.removeAttribute("disabled");
    document.BMC.homeTelFlg.removeAttribute("disabled");
    if(document.BMC.homeTelFlg.checked){
      document.BMC.homeNo.removeAttribute("disabled");
    }
    document.BMC.mobileTelFlg.removeAttribute("disabled");
    if(document.BMC.homeTelFlg.checked){
      document.BMC.mobileNo.removeAttribute("disabled");
    }
    document.BMC.email.removeAttribute("disabled");
    document.BMC.job.removeAttribute("disabled");
    document.BMC.membership.removeAttribute("disabled");
    document.BMC.LINE.removeAttribute("disabled");
    document.BMC.mailMagazine.removeAttribute("disabled");
  } else {
    document.BMC.name.setAttribute("disabled", true);
    document.BMC.hurigana.setAttribute("disabled", true);
    document.BMC.birthDate.setAttribute("disabled", true);
    document.BMC.age.setAttribute("disabled", true);
    document.getElementById("sex_man").setAttribute("disabled",true);
    document.getElementById("sex_woman").setAttribute("disabled",true);
    document.BMC.zip11.setAttribute("disabled", true);
    document.BMC.addr11.setAttribute("disabled", true);
    document.BMC.homeTelFlg.setAttribute("disabled", true);
    document.BMC.homeNo.setAttribute("disabled", true);
    document.BMC.mobileTelFlg.setAttribute("disabled", true);
    document.BMC.mobileNo.setAttribute("disabled", true);
    document.BMC.email.setAttribute("disabled", true);
    document.BMC.job.setAttribute("disabled", true);
    document.BMC.membership.setAttribute("disabled", true);
    document.BMC.LINE.setAttribute("disabled", true);
    document.BMC.mailMagazine.setAttribute("disabled", true);
  }
}

//電話番号チェックハンドラ
function HNChange() {
  if (document.BMC.homeTelFlg.checked) {
    document.BMC.homeNo.removeAttribute("disabled");
  } else {
    document.BMC.homeNo.setAttribute("disabled", true);
  }
}
function MNChange() {
  if (document.BMC.mobileTelFlg.checked) {
    document.BMC.mobileNo.removeAttribute("disabled");
  } else {
    document.BMC.mobileNo.setAttribute("disabled", true);
  }
}

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
          alert("未入力か不適切な入力があります");
        }else{
            //ajaxの廃止
            form.method = "post";
            form.action = "/confirm_BMCMembership";
            console.log(form)
            //document.body.append(data);
            form.submit();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
