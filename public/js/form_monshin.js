//Can't back to previoous Page
//History API が使えるブラウザかどうかをチェック
$(function(){
  Q1Change();
  Q2Change();
  Q3Change();
  Q4Change();
  Q5Change();
  Q6Change();
  Q7Change();
  HNChange();
  MNChange();

  history.pushState(null, null, null); //ブラウザバック無効化
  //ブラウザバックボタン押下時
  $(window).on("popstate", function (event) {
    history.pushState(null, null, null);
    window.alert('前のページに戻る場合、戻るボタンから戻ってください。');
  });
});

/* 隠すテーブルのオブジェクトを作成 */
const item1 = document.getElementById("show1");
const item2 = document.getElementById("show2");
const item3 = document.getElementById("show3");
const item4 = document.getElementById("show4");
const item5 = document.getElementById("show5");
const item6 = document.getElementById("show6");
const item7 = document.getElementById("show7");
const homeTelFlg = document.getElementById("homeTelFlg");
const mobTelFlg = document.getElementById("mobTelFlg");

/* 初期の表示はしない */
item1.style.display = "none";
item2.style.display = "none";
item3.style.display = "none";
item4.style.display = "none";
item5.style.display = "none";
item6.style.display = "none";
item7.style.display = "none";

/* 年齢計算 */

/* CheckBox，radio 全消し関数 */
function resetCheck(name) {
  var ElementCount = name.length;
  for (i = 0; i < ElementCount; i++) {
    name[i].checked = false;
  }
}

function Q1Change() {
  radio = document.getElementsByName("Q1");
  /* ある */
  if (radio[1].checked) {
    item1.style.display = "block";
    /* ない */
  } else if (radio[0].checked) {
    item1.style.display = "none";
    resetCheck(document.monshin.Q101);
    resetCheck(document.monshin.Q102);
    resetCheck(document.monshin.Q103);
    resetCheck(document.monshin.Q104);
    resetCheck(document.monshin.Q105);
    resetCheck(document.monshin.Q106);
    resetCheck(document.monshin.Q107);
    resetCheck(document.monshin.Q108);
    resetCheck(document.monshin.Q109);
    resetCheck(document.monshin.Q110);
    resetCheck(document.monshin.Q111);
    resetCheck(document.monshin.Q112);
    resetCheck(document.monshin.Q113);
    resetCheck(document.monshin.Q114);
    resetCheck(document.monshin.Q115);
    resetCheck(document.monshin.Q116);
    resetCheck(document.monshin.rheumatism);
    document.monshin.Q117.value = "";
    document.monshin.Q118.value = "";
  }
}
function Q2Change() {
  radio = document.getElementsByName("Q2");
  if (radio[1].checked) {
    item2.style.display = "block";
  } else if (radio[0].checked) {
    item2.style.display = "none";
    document.monshin.Q201.value = "";
  }
}
function Q3Change() {
  radio = document.getElementsByName("Q3");
  if (radio[1].checked) {
    item3.style.display = "block";
  } else if (radio[0].checked) {
    item3.style.display = "none";
    document.monshin.Q301.value = "";
    document.monshin.Q302.value = "";
  }
}
function Q4Change() {
  radio = document.getElementsByName("Q4");
  if (radio[1].checked) {
    item4.style.display = "block";
  } else if (radio[0].checked) {
    item4.style.display = "none";
    document.monshin.Q401.value = "";
    document.monshin.Q402.value = "";
  }
}
function Q5Change() {
  radio = document.getElementsByName("Q5");
  if (radio[1].checked) {
    item5.style.display = "block";
  } else if (radio[0].checked) {
    item5.style.display = "none";
    document.monshin.Q501.value = "";
    document.monshin.Q502.value = "";
  }
}
function Q6Change() {
  radio = document.getElementsByName("Q6");
  if (radio[1].checked) {
    item6.style.display = "block";
  } else if (radio[0].checked) {
    item6.style.display = "none";
    document.monshin.Q601.value = "";
    document.monshin.Q602.value = "";
    resetCheck(document.monshin.yuketsu);
    document.monshin.yuketsuDetail.value = "";
  }
}
function Q7Change() {
  radio = document.getElementsByName("Q7");
  if (radio[1].checked) {
    item7.style.display = "block";
  } else if (radio[0].checked) {
    item7.style.display = "none";
    document.monshin.Q701.value = "";
    resetCheck(document.monshin.irezumi);
    document.monshin.irezumiDetail.value = "";
  }
}
function HNChange() {
  if (document.monshin.homeTelFlg.checked) {
    document.monshin.homeNo.removeAttribute("disabled");
  } else {
    document.monshin.homeNo.setAttribute("disabled", true);
  }
}
function MNChange() {
  if (document.monshin.mobileTelFlg.checked) {
    document.monshin.mobileNo.removeAttribute("disabled");
  } else {
    document.monshin.mobileNo.setAttribute("disabled", true);
  }
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
            //post
            form.method = "post";
            form.action = "/confirm_monshin";
            form.submit();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

