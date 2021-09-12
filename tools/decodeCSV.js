//CSVに変換
module.exports = (body, ignore=[])=>{
  data = ""
  for (const input in body) {
    /* text，ラジオボタン入力 */
    if (typeof input == "string") {
      if (body[input] != "") {
        if(ignore.includes(input)==false){
          data += body[input] + "\n";
        }
      }
      /* 選択 */
    } else {
      data += input.join(",");
      data += "\n";
    }
  }
  return data;
}