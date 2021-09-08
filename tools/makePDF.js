const fonts = {
  nomal: {
    normal: 'fonts/GenShinGothic-Bold.ttf',
    bold: 'fonts/GenShinGothic-Normal.ttf',
  },
};

const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);
const fs = require('fs');


module.exports = (data)=>{

  var membership ="";
  var LINE = "";
  var mailMagazine = "";
  if(!(data.membership === undefined))membership = data.membership;
  if(!(data.LINE === undefined))      LINE = data.LINE;
  if(!(data.mailMagazine === undefined))mailMagazine = data.mailMagazine;

  const docDefinition = {
    content: [
      { text: 'BMC会員登録', style: 'title' },
      { text: "個人情報",style:'h1', margin:[0,5]},
      { text: "お名前",style:'h2'},
      { text: data.name, style:'p_small' },
      { text: data.name, style:'p',margin:[0,0,0,5] },
      { text: "生年月日",style:'h2'},
      { text: data.birthDate, style:'p',margin:[0,0,0,5] },
      { text: "年齢",style:'h2'},
      { text: data.age, style:'p',margin:[0,0,0,5] },
      { text: "性別",style:'h2'},
      { text: data.sex, style:'p',margin:[0,0,0,5] },
      { text: "住所",style:'h2'},
      { text: data.zip11, style:'p' },
      { text: data.addr11, style:'p',margin:[0,0,0,5] },
      { text: "電話番号",style:'h2'},
      { text: data.homeNo, style:'p' },
      { text: data.mobileNo, style:'p',margin:[0,0,0,5] },
      { text: "職業",style:'h2'},
      { text: data.job, style:'p',margin:[0,0,0,5] },
      
      //お得な情報
      { 
        layout:'lightHorizontalLines',
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 0,
          body: [
            [ { text: '会員様特典郵便or専用メール配信', bold:true}, {text:membership, bold:false} ],
            [ { text: 'LINEお友達特典※歯科除く', bold:true}, {text:LINE,bold:false} ],
            [ { text: 'メールマガジン配信', bold: true }, {text:mailMagazine,bold:false} ]
          ]
        },
      },
    ],
    styles: {
      title: {
        font: 'nomal',
        fontSize: 24,
        alignment:"center",
        bold:true,
      },
      h1: {
        font: 'nomal',
        fontSize: 18,
        bold: true,
      },
      h2: {
        font: 'nomal',
        fontSize: 12,
        bold: true,
      },
      p:{
        font: 'nomal',
        fontSize: 10,
        bold:false,
      },
      p_small:{
        font: 'nomal',
        fontSize: 7,
        bold:false,
      }
    },
    defaultStyle: {
      font: 'nomal',
      fontSize: 14,
      bold:false,
    }
  };
  
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream('data/PDFMembership/'+data.name+'.pdf'));
  pdfDoc.end();
}
