//Global Variables
var i;
var numOfSqrs = 16;
var rgbColSqrsArr = generateArrOfColSqrs(numOfSqrs);
var correctPick = rgbCodeToMatch();
var mediumBtn = document.querySelector("#mediumBtn");
var codeShown = document.querySelector("#codeShown");
var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".sqr");
var h1 = document.querySelector("h1");

//Buttons
easyBtn.addEventListener("click", function(){
   numOfSqrs = 4;
   reset();
});

mediumBtn.addEventListener("click", function(){
   numOfSqrs = 8;
   reset();
});

hardBtn.addEventListener("click", function(){
   numOfSqrs = 16;
   reset();
});

resetBtn.addEventListener("click", function(){
   reset();
});

//Main Logic
codeShown.textContent = correctPick;
for(i = 0; i < rgbColSqrsArr.length; i++){
   squares[i].style.background = rgbColSqrsArr[i];
   squares[i].addEventListener("click", function(){
   var clickedColor = this.style.background;
   if(clickedColor === correctPick){
      message.textContent = "Correct!";
      h1.style.background = correctPick;
      resetBtn.textContent = "Play Again";
      changeColors(clickedColor);
      changeModeBtnBackground();
   }else{
      this.style.background = "RGB(0, 0, 0)";
      message.textContent = "Try Again!";
   }
   });
}

//Functions
//change color of all the squares to match the correct square
function changeColors(correctPick){
   for(i = 0; i < rgbColSqrsArr.length; i++){
      squares[i].style.background = correctPick;
   }
}

//delete all possible 16 squares, including those that been changed to a black background 
function deleteSqrs(){
   for(i = 0; i < 16; i++){
      squares[i].style.display = "none";
   }
}

//randomly choose and return one of the RGB color coded colored squares in the displayed array
function rgbCodeToMatch(){
  var random = Math.floor(Math.random() * rgbColSqrsArr.length);
  return rgbColSqrsArr[random]; 
}

function ranrgb(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function generateArrOfColSqrs(numOfSqrs){
   var arr = [];
   for(i = 0; i < numOfSqrs; i++){
      arr.push(ranrgb());
   }
   return arr;
}

function changeModeBtnBackground(){
   if(numOfSqrs == 4){
      easyBtn.style.background = correctPick;
   }else if(numOfSqrs == 8){
      mediumBtn.style.background = correctPick;
   }else{
      hardBtn.style.background = correctPick;
   }
}

function resetModeBtnBackground(){
   if(numOfSqrs == 4){
      easyBtn.style.background = "RGB(68, 131, 171)";
      easyBtn.style.color = "RGB(255, 255, 255)";
      mediumBtn.style.background = "RGB(255, 255, 255)";
      mediumBtn.style.color = "RGB(68, 131, 171)";
      hardBtn.style.background = "RGB(255, 255, 255)";
      hardBtn.style.color = "RGB(68, 131, 171)";
   }else if(numOfSqrs == 8){
      mediumBtn.style.background = "RGB(68, 131, 171)";
      mediumBtn.style.color = "RGB(255, 255, 255)";
      easyBtn.style.background = "RGB(255, 255, 255)";
      easyBtn.style.color = "RGB(68, 131, 171)";
      hardBtn.style.background = "RGB(255, 255, 255)";
      hardBtn.style.color = "RGB(68, 131, 171)";
   }else{
      hardBtn.style.background = "RGB(68, 131, 171)";
      hardBtn.style.color = "RGB(255, 255, 255)";
      easyBtn.style.background = "RGB(255, 255, 255)";
      easyBtn.style.color = "RGB(68, 131, 171)";
      mediumBtn.style.background = "RGB(255, 255, 255)";
      mediumBtn.style.color = "RGB(68, 131, 171)";
      }
}

function reset(){
   deleteSqrs();
   rgbColSqrsArr = generateArrOfColSqrs(numOfSqrs);
   correctPick = rgbCodeToMatch();
   codeShown.textContent = correctPick;
   h1.style.background = "RGB(68, 131, 171)";
   message.textContent = "";
   resetBtn.textContent = "New Colors";
   for(i = 0; i < rgbColSqrsArr.length; i++){
      squares[i].style.background = rgbColSqrsArr[i];
      squares[i].style.display = "block";
   }
   resetModeBtnBackground();
}

