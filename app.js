const express = require("express");
const app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

/* public file を使えるように */
app.use(express.static("public"));
/* formからデータを取ってこれるように */
/* app.use(express.urlencoded({ extended: false, limit: "50mb" })); */
app.use(express.json({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.render("top.ejs");
});
app.get("/confirm", (req, res) => {
  res.render("confirm.ejs");
});

app.post("/submit_result", (req, res) => {
  file_name = "csvData/data_" + req.body.ID + ".csv";
  img1_file_name = "imgData1/data_" + req.body.ID + ".png";
  img2_file_name = "imgData2/data_" + req.body.ID + ".png";
  let data = "";
  let i = 0;

  for (const input in req.body) {
    /* text，ラジオボタン入力 */
    if (typeof input == "string") {
      if (req.body[input] != "") {
        if (!(input == "data1" || input == "data2" || input == "ID")) {
          data += req.body[input] + "\n";
        }
      }
      /* 選択 */
    } else {
      data += input.join(",");
      data += "\n";
    }
  }
  /* 画像保存 */

  var img1 = req.body.data1.replace(/^data:image\/png;base64,/, "");
  var img2 = req.body.data2.replace(/^data:image\/png;base64,/, "");
  //image1出力処理
  fs.writeFile(img1_file_name, img1, "base64", (err, data) => {
    if (err) console.log(err);
    else console.log("img1 write end");
  });
  //image1出力処理
  fs.writeFile(img2_file_name, img2, "base64", (err, data) => {
    if (err) console.log(err);
    else console.log("img2 write end");
  });
  /* CSV出力処理 */
  fs.writeFile(file_name, data, (err, data) => {
    if (err) console.log(err);
    else console.log("csv write end");
  });
  console.log("rend");
  res.render("confirm.ejs");
});

/* ポート3000を開放 */
app.listen(3000);
console.log("access to 'localhost:3000'");
