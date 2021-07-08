$("form").submit(function () {
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
    url: "/submit_result",
    dataType: "json",
    contentType: "application/json",
    scriptCharset: "utf-8",
    data: JSON.stringify(data),
  });
});

// ②変換関数：json to 欲しい形
const parseJson = function (data) {
  var returnJson = {};
  for (idx = 0; idx < data.length; idx++) {
    returnJson[data[idx].name] = data[idx].value;
  }
  return returnJson;
};
