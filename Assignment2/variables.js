/*Differences between let, const and var.

var
Before ES6, var is the used for variable declaration in javascript. var variables can be scoped globally or locally. 
they can also be reassigned. the issues with var prompted the introduction of let and const.
using var to reassign values of variables locally may lead to unexpected outputs which may cause alot of bugs in our codes.
an advantage of the var is that it can be used to redeclare variables.

let
let was introduced with ES6. it adheres strictly to javascript scope as it is an improvement of var. 
A variable decleared with let in a block is only available for use within that code block or function.
values declared with let can be updated but not redeclared. 

const
values decleared with const neither be changed nor updated. any attempt to change them will throw an error. 
const must be initialised when declared.*/

//Examples

var bestFriend = "Martin";

function myFunction(){
    bestFriend = "Ridwan";  //it can be reassigned
	if(bestFriend=== "Ridwan"){
		console.log("you are correct");
    }
}
myFunction(); //outputs the local variable



let bestColor = "green";
bestColor = "blue"; //console outputs blue
let bestColor = "white"; //throws up an error. it can be updated
console.log(bestColor);


const birthYear = 1993;
function myFunction(){
	const birthYear = 2019; //throws up an error
	console.log(bithYear);
}
birthYear(); //output throws error because const is declared twice


/*Extra Credit
Hoisting is javascript's system of moving variable declarations to the top of their scope before code execution.
in Javascript, if you declare a variable with var without hoisting, the codes will run. 
but let and const must be hoisted to the top of their scope-globally or locally before used.

*/




