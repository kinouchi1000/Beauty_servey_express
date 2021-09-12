const writeFile = require('./tools/writeFile.js');
const decodeCSV = require('./tools/decodeCSV.js');
const makePDF = require('./tools/makePDF.js');
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ limit:'50mb',extended: false }));

var customer_data =null

// top
app.get("/", (req, res)=>{
  customer_data = null
  res.render("top.ejs");
});

// 問診票
app.get("/monshin", (req, res)=>{
  console.log("問診票表示")
  res.render("monshin");
});

//BMC Members入会
app.get("/BMCMembership", (req, res) => {
  console.log("BMCアンケート表示");
  res.render("BMCMembership.ejs",{data:customer_data});
});

// 美容アンケート
app.get("/beautySearch", (req, res) => {
  console.log("美容アンケート表示");
  res.render("beautySearch",{data:customer_data});
});

///////////////////CSV出力/////////////////////

//　問診票CSV変換
app.post("/submit_monshin", (req, res) => {

  file_name = "data/CSVMonshin/data_" + req.body.name + ".csv";
  let data = decodeCSV(req.body)
  writeFile(file_name,data);
  customer_data = req.body
  res.render("monshin_confirm", { data: req.body });
  
});

// BMC入会CSV変換
app.post("/submit_BMCMembership", (req, res) => {
  
  file_name = "data/CSVMembership/data_" + req.body.name + ".csv";
  let data = decodeCSV(req.body)
  writeFile(file_name,data);
  makePDF(req.body);
  res.render("BMCMembershp_confirm", { data: req.body });

});

// 美容アンケートCSV変換
app.post("/submit_beautySearch", (req, res) => {
  
  file_name = "data/CSVBeauty/data_" + req.body.name + ".csv";
  img1_file_name = "data/imgData1/data_" + req.body.name + ".png";
  img2_file_name = "data/imgData2/data_" + req.body.name + ".png";

  const data = decodeCSV(req.body,["data1","data2","ID"]);

  var img1 = req.body.data1.replace(/^data:image\/png;base64,/, "");
  var img2 = req.body.data2.replace(/^data:image\/png;base64,/, "");

  //各データ出力処理
  writeFile(img1_file_name, img1,"base64");
  writeFile(img2_file_name, img2,"base64");
  writeFile(file_name,data);

  res.render("beautySearch_confirm",{data: req.body});
});

///////////Port開放////////////

/* ポート3000を開放 */
app.listen(3000);
console.log("access to 'localhost:3000'");
