function makeSound(button) {
  switch (button) {
    case "w":
      var audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;
    case "a":
      var audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;
    case "s":
      var audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    case "d":
      var audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;
    case "j":
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    case "k":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "l":
      var audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    default:
      console.log(button);
  }
}

function makeAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}


var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  });
}

document.body.addEventListener("keydown", function(event){
  makeSound(event.key);
  makeAnimation(event.key);
  makeDistinction(event.key);
});

function makeDistinction(key){
  var pressedButton = document.querySelector("."+key);
  var toWhiten=["w","a","s","d","l"];
  var toBlacken=["j","k"];
  if(toWhiten.includes(key)){
    pressedButton.classList.add("whiteDistinct");
    setTimeout(function(){
      pressedButton.classList.remove("whiteDistinct");
    }, 150);
  }
  if(toBlacken.includes(key)){
    pressedButton.classList.add("blackDistinct");
    setTimeout(function(){
      pressedButton.classList.remove("blackDistinct");
    }, 150);
  }

}
