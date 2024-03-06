
//user profile photo settings
var file=document.querySelector("#profileImage");
var imgUrl="/img/avatar.png";
file.addEventListener("change",function (){
    [...this.files].map(file=>{
            const reader=new FileReader();
            reader.addEventListener('load',function(){
                imgUrl=this.result; 
                var imgs=document.querySelectorAll("#userAvatar");
                console.log(imgs[1]);
                for (let i = 0; i < imgs.length; i++) {
                    imgs[i].src=imgUrl;
                    
                }
                
            });
            reader.readAsDataURL(file);
        
    });
});


export function createUserMessage(msg){
    let now=new Date();
    let div=document.createElement("div");
    div.classList.add("d-flex");  
    div.classList.add("justify-content-end");
    div.classList.add("mb-4");
    div.innerHTML='<div class="msg_cotainer_send">'+msg+'<span class="msg_time_send">'+now.getHours()+":"+now.getMinutes()+', Today</span></div><div class="img_cont_msg"><img id="userAvatar" src="'+imgUrl+'"class="rounded-circle user_img_msg"></div>';
    let card=document.querySelector('.msg_card_body');
    card.appendChild(div);
}

export function createAIMessage(msg){
    let now=new Date();
    let div=document.createElement("div");
    div.classList.add("d-flex");  
    div.classList.add("justify-content-start");
    div.classList.add("mb-4");
    div.innerHTML='<div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"class="rounded-circle user_img_msg"></div><div class="msg_cotainer">'+msg+'<span class="msg_time">'+now.getHours()+":"+now.getMinutes()+', Today</span></div>';
    let card=document.querySelector('.msg_card_body');
    let cardscrollheight=document.querySelector("#cardscrollheight");
    cardscrollheight.innerText=card.scrollHeight; //for content scroll height
    card.appendChild(div);
}