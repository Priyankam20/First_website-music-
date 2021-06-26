
var mysong=document.getElementById("mysong");
var icon=document.getElementsById("icon");

icon.onclick = function(){
    mysong.onplay();

    if(mysong.paused){
        mysong.onplay();
        icon.src="https://i.pinimg.com/564x/15/7c/ed/157cedb6e30734e84862c33cf024752a.jpg";
    }else{
        mysong.pause();
        icon.src="https://i.pinimg.com/564x/15/7c/ed/157cedb6e30734e84862c33cf024752a.jpg";
    }
  
    



