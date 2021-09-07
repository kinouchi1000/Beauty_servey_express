var fs = require("fs");

//CSVに保存
module.exports = (file_name, data,option=null)=>{
  fs.writeFile(file_name, data, option, (err, data) => {
    if (err) console.log(err);
    else console.log(file_name+" write end");
  });
};

