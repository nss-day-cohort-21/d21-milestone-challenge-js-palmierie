let tree = [];

var leaf = [];

var chooseHeight;

var spaces = "X";
var treeArray =[];
var realTree = [];
var realLeaf = leaf;

var clicked = document.getElementById("submitButton");
var entered = document.getElementById("form");

    function pullInput() {

      // ADD CONDITIONAL FOR NO ENTRY HERE

      // Pull input from user
      let chooseHeightString = document.getElementById("height-input").value;
      leaf = document.getElementById("char-input").value;

      // Change input from string into number
      chooseHeight = parseInt(chooseHeightString);
      
      console.log('height', chooseHeight, "Character", leaf);
      
      for (var i = 0; i < chooseHeight; i++){
        debugger;
        tree += leaf;
        var bigTree = (tree.length * 2) - 1;
        var spaceArray = [];
        var outI = i;
      for( var n = chooseHeight - outI - 1; n > 0 ; n--){
        spaceArray += spaces;
      }
      for (var w = 0; w < bigTree; w++){
        realTree += realLeaf;
      }
      // treeArray = spaceArray + tree;
      treeArray = spaceArray + realTree;
      console.log('Tree Array', treeArray);
      }
    }

// USER CLICKS OR PRESSES ENTER
clicked.addEventListener("click", pullInput);
form.addEventListener("keyup", function(event){
  if (event.which === 13){
    pullInput();
  }
});



/*  CONDITIONAL
if (chooseHeight === ""|| leaf === ""){
  alert("You must enter a number in both fields");
  console.log("did not work");
  
} else {
  console.log('height & char', chooseHeight, leaf);
  // Run Program Function
  
}

*/