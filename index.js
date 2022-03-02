var noOfDrumButton= document.querySelectorAll(".drum").length;
// adding the sound through mouse click
for(var i=0;i<noOfDrumButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

  console.log(buttonInnerHTML);
});
}
// adding the sound through keyboard press
document.addEventListener("keydown",function(event){
  var keyPressed=event.key;
playSound(keyPressed);
console.log(event.key);
console.log(event);
buttonAnimation(keyPressed);

});
// adding the sound
 function playSound(key){
   switch (key) {
     case "w":
        var tom1= new Audio('sounds/tom-1.mp3');
        tom1.play();

       break;
       case "a":
       var tom2=new Audio('sounds/tom-2.mp3');
       tom2.play();
         break;
         case "s":
         var tom3=new Audio('sounds/tom-3.mp3');
         tom3.play();
           break;
           case "d":
           var tom4=new Audio('sounds/tom-4.mp3');
           tom4.play();
           break;
           case "j":
           var snare =new Audio('sounds/snare.mp3');
           snare.play();
             break;
             case "k":
             var crash=new Audio('sounds/crash.mp3');
             crash.play();
               break;
               case "l":
               var kick=new Audio('sounds/kick-bass.mp3');
               kick.play();
                 break;
     default:
     console.log(key+" error");

   }
 }
 // adding the animation
function buttonAnimation(currentKey){
 var activeButton=document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed")
 },100);

}
