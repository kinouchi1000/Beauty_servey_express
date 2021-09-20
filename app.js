const writeFile = require('./tools/writeFile.js');
const decodeCSV = require('./tools/decodeCSV.js');
const makePDF = require('./tools/makePDF.js');
const makeInfo = require('./tools/PersonInfo.js');
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ limit:'50mb',extended: false }));
app.use(express.json({ extended: true, limit: "10mb" }));

var customer_data =null

//個人情報オブジェクト
var personalInfo = makeInfo(null);


// top
app.get("/", (req, res)=>{
  customer_data = null
  res.render("top.ejs");
  personalInfo= makeInfo(null)
})


// 問診票
app.get("/monshin", (req, res)=>{
  console.log("問診票表示")
  res.render("monshin",{data:personalInfo});
});

//BMC Members入会
app.get("/BMCMembership", (req, res) => {
  console.log("BMC会員登録票表示")
  res.render("BMCMembership",{data:personalInfo});
});

// 美容アンケート
app.get("/beautySearch", (req, res) => {
  console.log("美容アンケート表示");
  res.render("beautySearch",{data:personalInfo});
});


/////////////////入力画面へ戻る///////////////
// 問診票
app.post("/monshin", (req, res)=>{
  res.render("monshin",{data:req.body});
});

//　BMC　Membership入会
app.post("/BMCMembership",(req,res)=>{
  res.render("BMCMembership",{data:req.body})
});

//美容アンケート
app.post("/beautySearch",(req,res)=>{
  res.render("beautySearch",{data:req.body});
});

//////////////////確認画面/////////////////////

//　問診票
app.post("/confirm_monshin", (req, res) => {
  res.render("monshin_confirm", { data: req.body });
});

//　BMC Membership入会
app.post("/confirm_BMCMembership", (req, res) => {
  res.render("BMCmembership_confirm", { data: req.body });
});

//　美容アンケート
app.post("/confirm_beautySearch", (req, res) => {
  res.render("beautySearch_confirm", { data: req.body });
});

///////////////////CSV出力/////////////////////

//　問診票CSV変換
app.post("/submit_monshin", (req, res) => {

  file_name = "data/CSVMonshin/data_" + req.body.name + ".csv";
  let data = decodeCSV(req.body);
  personalInfo= makeInfo(req.body);
  writeFile(file_name,data);
  res.redirect("/BMCMembership");
});

// BMC入会CSV変換
app.post("/submit_BMCMembership", (req, res) => {
  
  file_name = "data/CSVMembership/data_" + req.body.name + ".csv";
  let data = decodeCSV(req.body);
  personalInfo= makeInfo(req.body);
  writeFile(file_name,data);
  makePDF(req.body);
  res.redirect("/beautySearch");
});

// 美容アンケートCSV変換
app.post("/submit_beautySearch", (req, res) => {
  
  file_name = "data/CSVBeauty/data_" + req.body.name + ".csv";
  img1_file_name = "data/imgData1/data_" + req.body.name + ".png";
  img2_file_name = "data/imgData2/data_" + req.body.name + ".png";

  const data = decodeCSV(req.body,["data1","data2","ID"]);
  //個人情報の更新
  personalInfo= makeInfo(req.body);

  var img1 = req.body.data1.replace(/^data:image\/png;base64,/, "");
  var img2 = req.body.data2.replace(/^data:image\/png;base64,/, "");

  //各データ出力処理
  writeFile(img1_file_name, img1,"base64");
  writeFile(img2_file_name, img2,"base64");
  writeFile(file_name,data);

  res.redirect("/");
});

///////////Port開放////////////

/* ポート3000を開放 */
app.listen(3000);
console.log("access to 'localhost:3000'");
