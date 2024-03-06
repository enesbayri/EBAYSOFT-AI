$(document).ready(function(){
    $('#cardscrollheight').toggle();
    $('#action_menu_btn').click(function(){
        //$('.action_menu').toggle();
        var cardnewheight=$("#cardscrollheight").text(); //for content scroll height
        $('.msg_card_body').animate({ scrollTop: cardnewheight }, 1000);
    });
    
 });