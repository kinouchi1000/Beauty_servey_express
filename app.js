const express = require("express");
var fs = require("fs");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
//app.use(express.json({ extended: true, limit: "10mb" }));

// top
app.get("/", (req, res)=>{
  //res.render("monshin.ejs");
})

// 問診票
app.get("/monshin", (req, res)=>{
  console.log("問診票表示")
  res.render("monshin");
});

//BMC Members入会
app.get("/BMCMembership", (req, res) => {
  res.render("BMCMembership.ejs");
});

// 美容アンケート
app.get("/beautySearch", (req, res) => {
  console.log("美容アンケート表示")
  res.render("beautySearch");
});
// 確認画面
app.get("/confirm", (req, res) => {
  console.log("確認画面表示")
  res.render("confirm");
});

///////////////////CSV出力/////////////////////

//CSVに保存
const saveCSV = (file_name, data)=>{
  fs.writeFile(file_name, data, (err, data) => {
    if (err) console.log(err);
    else console.log(file_name+" CSV write end");
  });
};
//CSVに変換
const decodeCSV = (body)=>{
  data = ""
  for (const input in body) {
    /* text，ラジオボタン入力 */
    if (typeof input == "string") {
      if (body[input] != "") {
        data += body[input] + "\n";
      }
      /* 選択 */
    } else {
      data += input.join(",");
      data += "\n";
    }
  }
  return data;
}

//　問診票CSV変換
app.post("/submit_monshin", (req, res) => {
  
  file_name = "CSVMonshin/data_" + req.body.name + ".csv";
  //出力データ作成
  let data = decodeCSV(req.body)
  /* CSV出力処理 */
  saveCSV(file_name,data);
  //レンダリング
  res.render("BMCMembership", { data: req.body });
});

// BMC入会CSV変換
app.post("/submit_BMCMembership", (req, res) => {
  file_name = "CSVMembership/data_" + req.body.name + ".csv";
  //出力データ作成
  let data = decodeCSV(req.body)
  /* CSV出力処理 */
  saveCSV(file_name,data);
  //レンダリング
  res.render("beautySearch", { data: req.body });
});

// 美容アンケートCSV変換
app.post("/submit_beautySearch", (req, res) => {
  
  file_name = "CSVBeauty/data_" + req.body.ID + ".csv";
  img1_file_name = "imgData1/data_" + req.body.ID + ".png";
  img2_file_name = "imgData2/data_" + req.body.ID + ".png";
  let data = "";

  for (const input in req.body) {
    /* text，ラジオボタン入力 */
    if (typeof input == "string") {
      if (req.body[input] != "") {
        //if (!(input == "data1" || input == "data2" || input == "ID")) {
          data += req.body[input] + "\n";
        //}
      }
      /* 選択 */
    } else {
      data += input.join(",");
      data += "\n";
    }
  }

  /* 画像保存 */
  console.log(req.body)
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
  decode_CSV(file_name,data);
  //レンダリング
  res.render("confirm",{data: req.body});
});

///////////Port開放////////////

/* ポート3000を開放 */
app.listen(3000);
console.log("access to 'localhost:3000'");
