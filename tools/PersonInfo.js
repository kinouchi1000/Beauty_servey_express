module.exports = (data) => {
  var result = {
    name :"",
    hurigana:"",
    birthDate:"",
    age:"",
    sex:"",
    zip11:"",
    addr11:"",
    homeNo:"",
    mobileNo:"",
  };
  if (data!=null){
    
    for (var key in result) {
      if(!(data[key]===undefined)){
        result[key] = data[key];
      }
    }
  }
  return result
}

