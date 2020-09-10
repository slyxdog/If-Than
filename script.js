var Wrapper = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animals.length; i++){
  DaAnimals(animals[i]);
  }
function DaAnimals (str) {
  var ele = document.createElement("div");
  if( str ==="dog"){
    ele.innerHTML = "borf borf!";
  } 
  else if( str ==="cat"){
    ele.innerHTML = "I'm a Cat!";
  }
  else{
    ele.innerHTML = "I'm an Animal";
  }
  Wrapper.appendChild(ele);
}