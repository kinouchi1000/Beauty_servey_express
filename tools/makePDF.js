// const fonts = {
//   nomal: {
//     normal: 'fonts/GenShinGothic-Bold.ttf',
//     bold: 'fonts/GenShinGothic-Normal.ttf',
//   },
// };

const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = (data)=>{

  //debug 
  data = {
    name :"木内貴浩",
    hurigana:"きのうち たかひろ",
    birthDate:"2021-07-19",
    age:"21",
    sex:"男",
    zip11:"7730018",
    addr11:"豊橋市天白町ひばりが丘１−１豊橋技術科学大学学生宿舎G1-302-5",
    homeNo:"0885-37-3005",
    mobileNo:"080-2974-9595",
    email : "1111@bb.cc.jj",
    job:"学生",
    membership:"希望する",
    mailMagazine:"希望する"    
  };

  //parameter "お得な情報"
  var membership ="";
  var LINE = "";
  var mailMagazine = "";
  if(!(data.membership === undefined)){membership = "☑"}else{membership="□"};
  if(!(data.LINE === undefined))      {LINE = "☑"}else{LINE="□"};
  if(!(data.mailMagazine === undefined)){mailMagazine = "☑"}else{mailMagazine="□"}
  const filename = 'data/PDFMembership/'+data.name+'.pdf'

  // set fonts
  const Bold  = "./fonts/GenShinGothic-Bold.ttf"
  const Heavy = "./fonts/GenShinGothic-Heavy.ttf"
  const Normal = "./fonts/GenShinGothic-Normal.ttf" 

  const DayList = ["日","月","火","水","木","金","土"]
  const date = new Date();
  const today = date.getFullYear()+"年　　"+date.getMonth()+"月　"+date.getDate()+"日　（"+　DayList[date.getDay()]+"）";
  // --------------Create a document-----------
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream(filename));


  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image('./public/image/BMC.png', 0,0,{
    fit: [620,10000],
  });

  // Embed a font, set the font size, and render some text
  doc
    .font(Normal)
    .fontSize(10)
    .text(today,350,15, {
      width:200,
      align:'center'
    });

  doc
    .font(Normal)
    .fontSize(10)
    .text('☑', 20,68,{
      width:10,
      align:'center'
    });

  //ふりがな
  doc
    .font(Normal)
    .fontSize(10)
    .text(data.hurigana, 110,112,{
      width:440,
      align:'center'
    });
  // Name
  doc
    .font(Normal)
    .fontSize(20)
    .text(data.name, 110,127,{
      width:440,
      align:'center'
    });
  // birthDate
  // year
  var bDate = data.birthDate.split('-')
  doc
  .font(Normal)
    .fontSize(10)
    .text('西暦　　'+ bDate[0], 210,160,{
      width:80,
      align:'center'
    });
  // month
  doc
  .font(Normal)
    .fontSize(10)
    .text(bDate[1], 300,160,{
      width:20,
      align:'center'
    });
  // date
  doc
  .font(Normal)
    .fontSize(10)
    .text(bDate[2], 330,160,{
      width:20,
      align:'center'
    });
  
  //age
  doc
  .font(Normal)
    .fontSize(10)
    .text(data.age, 367,160,{
      width:30,
      align:'center'
    });

   // SEX
  doc
    .font(Normal)
    .fontSize(10)
    .text(data.sex, 540,160,{
      width:10,
      align:'center'
  });

  // zip number top3
  doc
    .font(Normal)
    .fontSize(8)
    .text(data.zip11.slice(0,3), 114,178,{
      width:20,
      align:'center'
  });
    // zip number
    doc
    .font(Normal)
    .fontSize(8)
    .text(data.zip11.slice(3,7), 140,178,{
      width:30,
      align:'center'
  });

  // address
  doc
  .font(Normal)
  .fontSize(12)
  .text(data.addr11, 110,190,{
    width:440,
    align:'center'
  });

  //tellphone No
  if(!(data.homeNo === undefined)){
    doc
    .font(Normal)
    .fontSize(10)
    .text(data.homeNo, 220,215,{
      width:340,
      align:'center'
    });
  }
  //mobile phone Number
  if(!(data.homeNo === undefined)){
    doc
    .font(Normal)
    .fontSize(10)
    .text(data.mobileNo, 220,232,{
      width:340,
      align:'center'
    });
  }

  //Email address
  doc
    .font(Normal)
    .fontSize(10)
    .text(data.email, 110,250,{
      width:440,
      align:'center'
    });

  //Email sending

  doc
  .font(Normal)
  .fontSize(10)
  .text(membership, 220,262,{
    width:10,
    align:'center'
  });


  //LINE
  doc
  .font(Normal)
  .fontSize(10)
  .text(LINE, 220,326,{
    width:10,
    align:'center'
  });
  


  //mail magazine
  doc
  .font(Normal)
  .fontSize(10)
  .text(mailMagazine, 220,388,{
    width:10,
    align:'center'
  });
  

  //job
  doc
  .font(Normal)
  .fontSize(20)
  .text(data.job, 110,415,{
    width:440,
    align:'center'
  });

  
  // Finalize PDF file
  doc.end();
}
