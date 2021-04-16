
for (var i = 0; i < 3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;

        console.log(text);
        audioPlay(text);
        playAnimation(text);

        
});
}

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audio/ALLAH HU, Listen & Feel Relax, Best for Sleeping, Background Nasheed Vocals Only, Islamic Releas.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("audio/Baby Laughs Adorably When Mom Whispers In His Ears - 1089588.mp3");
            audio.play();
            break;
            
        case "c":
            var audio = new Audio("audio/Hi Mom, I'm just riding NEW video PART 2 New vs Old Version.mp3");
            audio.play();
            break;
    }

}

function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000);
}