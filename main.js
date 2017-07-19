let tree = [];

var leaf;

var chooseHeight;

var div = document.getElementById("submitButton");
 div.addEventListener("click", function(){
  // Pull input from user
  let chooseHeightString = document.getElementById("height-input").value;
  leaf = document.getElementById("char-input").value;

  // Change input from string into number
  chooseHeight = parseInt(chooseHeightString);
});

function runTree(height,character) {
  for (let i = 0; i < height; i++){
    let n = i + 1;
    tree = character * n;
  }
}

// Check Input
function checkInput() {
  
}
if (chooseHeight === ""|| leaf === ""){
  alert("You must enter a number in both fields");
  console.log("did not work");
  
} else {
  console.log('height & char', chooseHeight, leaf);
  // Run Program Function
  runTree(chooseHeight,leaf);
  
}


