
export function AILoading(bool){
    if(bool){
        let div=document.createElement("div");
        div.id="AIloading";
        div.classList.add("d-flex");  
        div.classList.add("justify-content-start");
        div.classList.add("mb-4");
        div.innerHTML='<div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"class="rounded-circle user_img_msg"></div><div class="msg_cotainer" style="background-color: transparent;">'+'<img src="/img/AI-no-bg.gif"class="loading_img"></img>'+'</div>';
        let card=document.querySelector('.msg_card_body');
        let cardscrollheight=document.querySelector("#cardscrollheight");
        cardscrollheight.innerText=card.scrollHeight; //for content scroll height
        card.appendChild(div);
    }else{
        let div=document.querySelector("#AIloading");
        let card=document.querySelector('.msg_card_body');
        card.removeChild(div);
    }
    
}
