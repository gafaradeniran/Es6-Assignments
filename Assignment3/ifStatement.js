
let men = {name:"socrates", type:"mortal"}

if((men.name == "socrates") && (men.type== "mortal")){ //test if socrates belongs to men and if men are mortals
	console.log("socrates is a mortal");
} 
else if ((men.name ==="socrates" || men.type!= "mortal")){ 
  console.log("socrates is not a mortal");// executes if socreates belongs to men or men are not mortals
}
else {
  console.log("socrates is not a man"); //executes if any of the above conditions are not true
}


//Extra credit

let cakeIsVanilla = true;
let cakeIsChocolate = false;

if(!cakeIsVanilla || cakeIsChocolate){
	console.log("cake is either vanilla or chocolate");
} 
else if (cakeIsChocolate){
  console.log("the cake is not chocolate");
}
else {
  console.log("therefore, this cake is vanilla");