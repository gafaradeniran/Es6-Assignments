
let mortals = ["Aristotle", "Socrates", "Isaac"]; //an array of names to loop through

const checkMortal = (name) => {
  let isMortal = false;
  mortals.forEach((man) => { //loops through each element in the array 
    if (man===name){
      isMortal= true;
    }
  });
  return isMortal;
};

if (checkMortal("Socrates")){
  console.log("Socrates is a mortal"); //outputs if the input is socrates
} else {
  console.log("socrates is not mortal"); //outputs if input is not socrates
}



//Extra Credit

const cakes = (arrayCake = [], isVanilla=true) => { 
	
  if (isVanilla){
		return  "The cake is" + " " +arrayCake[0]; //outputs vanilla if the input is true
	} else if(!isVanilla){
		return "The cake is" + " " + arrayCake[1]; //outputs chocolate if the input id false
	}
	else {
      console.log("the cake is neither vanilla nor chocolate"); //if input is neither true nor false, then the cake has no flavour
    }
}
console.log(cakes(["Vanilla", "Chocolate"], false));