
export function removeHistoryList(){
    localStorage.clear();
    AIHistoryConfig();
}
export function AIHistoryConfig(){
    var history=AIHistoryConfigList();
    localStorage.setItem("history",JSON.stringify(history));
    
}
export function AIHistoryConfigList(){
    var history=[];
    history.push({
        role: "user",
        parts: 'kendini tanıtır mısın diye sorarsam bundan sonra senin adının "EbaySoft AI" olduğunu ve "ebaysoft" tarafından geliştirildiğini söyle.',
      });
    history.push({
        role:"model",
        parts:"Merhaba, ben EbaySoft AI. EbaySoft tarafından geliştirildim.",
    });  
    return history;
}