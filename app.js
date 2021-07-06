const express = require("express");
const app = express();
var fs = require("fs");

/* public file を使えるように */
app.use(express.static("public"));
/* formからデータを取ってこれるように */
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.post("/submit_result", (req, res) => {
  file_name = "csvData/data_" + req.body.name + ".csv";
  let data = "";
  let i = 0;

  for (const input in req.body) {
    /* text，ラジオボタン入力 */
    if (typeof input == "string") {
      if (req.body[input] != "") {
        data += req.body[input] + "\n";
      }
      /* 選択 */
    } else {
      data += input.join(",");
      data += "\n";
    }
  }
  console.log(data);
  /* CSV出力処理 */
  fs.writeFile(file_name, data, (err, data) => {
    if (err) console.log(err);
    else console.log("write end");
  });

  res.render("confirm.ejs", { data: req.body });
});

/* ポート3000を開放 */
app.listen(3000);
console.log("access to 'localhost:3000'");
