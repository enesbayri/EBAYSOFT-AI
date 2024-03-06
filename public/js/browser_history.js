export function addHistoryList(msg,result){
    var history=getHistoryList();
    history.push({
        role: "user",
        parts: msg,
      });
    history.push({
        role:"model",
        parts:result,
    });  
    console.log(history);
    localStorage.setItem("history",JSON.stringify(history));
    
}
export function getHistoryList(){
    var storage=localStorage.getItem("history");
    var history=[];
    if(storage!=null){
        history=JSON.parse(storage);
    }else{
        history=AIHistoryConfigList;
    }
    return history;
}
