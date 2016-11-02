var callbafn;
module.exports={

  onuserSetCallback(fn){
    if (typeof  fn == "function"){
      callbafn=fn;
    }
  },
  onuserGetCallback(){
    return callbafn;
  }

};
