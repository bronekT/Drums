var btns = document.querySelectorAll(".drum")




for(var i = 0; i < btns.length ; i++){
    var nestedArray = btns[i];
    nestedArray.addEventListener("click",function(){  
        var btnsThis =this.innerHTML;
        playSound(btnsThis);
        playAnimation(btnsThis);
        
    });
    
    
};
document.addEventListener("keydown",function(event){
    playSound(event.key);
    playAnimation(event.key);

});

function playSound (key) {
    
    switch (key) {
        case "w":
            var audio = new Audio ("/sounds/crash.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio ("/sounds/kick-bass.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio ("/sounds/snare.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio ("/sounds/tom-1.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio ("/sounds/tom-2.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio ("/sounds/tom-3.mp3");
            audio.play(); 
        break;

        case "l":
            var audio = new Audio ("/sounds/tom-4.mp3");
            audio.play();
        
        break;
    
        default: console.log(btnsThis);
            break;
    }  

}

function playAnimation(currentKey) {
 var activeKey = document.querySelector("." + currentKey);
 activeKey.classList.add("pressed");
 setTimeout(function (){
    activeKey.classList.remove("pressed");
},100);   
}
