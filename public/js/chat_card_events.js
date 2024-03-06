import {AILoading} from "./AI_loading_animation.js";
import {createUserMessage,createAIMessage} from "./message_card.js";
import {api_service} from "./api_service.js";
import {addHistoryList} from "./browser_history.js";
import {removeHistoryList} from "./AI_history.js";

document.querySelector(".send_btn").addEventListener("click", sendMessage);
document.addEventListener("keypress",pressEnter);
document.querySelector(".fa-trash").addEventListener("click", removeHistoryList);



async function sendMessage(e){
    var userMsg=document.querySelector(".type_msg");
    var msg=userMsg.value;
    if(msg=="\n" ||  msg==" " || msg.length==1){
        userMsg.value="";
    }else{
        if(msg!=""){
            userMsg.value="";
            createUserMessage(msg);
            document.querySelector("#action_menu_btn").click();
            AILoading(true);
            var result=await api_service(msg);
            AILoading(false);
            addHistoryList(msg,result);
            createAIMessage(result);
            document.querySelector("#action_menu_btn").click();
        }
    }

}


function pressEnter(e){
    if(e.key=="Enter"){
        sendMessage(e);
    }
}

