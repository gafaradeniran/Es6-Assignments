
const upperLeft = document.getElementById("first-up").querySelector("span");
const upperCenter = document.getElementById("second-up").querySelector("span");
const upperRight = document.getElementById("third-up").querySelector("span");
const middleLeft = document.getElementById("first-middle").querySelector("span");
const middleCenter = document.getElementById("second-middle").querySelector("span");
const middleRight = document.getElementById("third-middle").querySelector("span");
const bottomLeft = document.getElementById("first-bottom").querySelector("span");
const bottomCenter = document.getElementById("second-bottom").querySelector("span");
const bottomRight = document.getElementById("third-bottom").querySelector("span");
let addCross = true;

const allDivs = document.getElementById("game-container");
const allSpans = allDivs.querySelectorAll("span");

document.addEventListener('DOMContentLoaded', () => {
  for(const p of allSpans){
	p.addEventListener("click", addPlayer);
}
});

function addPlayer(e){
	const boxTarget = e.target;
	
	if(boxTarget.innerText !== "*"){
		return;
	}
	
	boxTarget.classList.remove("cross");
	boxTarget.classList.remove("circle");
	
	if(addCross){
		boxTarget.innerText= "X";
		boxTarget.classList.add("cross");
		addCross = false;
	} else{
		boxTarget.innerText= "O";
		boxTarget.classList.add("circle");
		addCross = true;
	}
	setTimeout(confirmWinner, 100);
}


function confirmWinner(){
	const box1 = upperLeft.innerText;
	const box2 = upperCenter.innerText;
	const box3 = upperRight.innerText;
	const box4 = middleLeft.innerText;
	const box5 = middleCenter.innerText;
	const box6 = middleRight.innerText;
	const box7 = bottomLeft.innerText;
	const box8 = bottomCenter.innerText;
	const box9 = bottomRight.innerText;
	
	//first horizontal line
	if(box1===box2 && box2 ===box3 && box1===box3 && box1!== "*"){
		alert(box1 + " won!");
		resetGame();
		return;
		
	}
	
		//second horizontal line
	 if(box4===box5 && box5===box6 && box4===box6 && box4!=="*"){
		alert(box4 + " won!");
		resetGame();
		return;
	}
	
	//third horizontal line
	 if(box7===box8 && box8===box9 && box7===box9 && box7!=="*"){
		alert(box7 + " won!");
		resetGame();
		return;
	}
	
	//first vertical column
	 if(box1===box4 && box4===box7 && box1===box7 && box1!=="*"){
		alert(box1 + " won!");
		resetGame();
		return;  
	}
	
	//second vertical row
	 if(box2===box5 && box5===box8 && box2===box8 && box2!=="*"){
		alert(box2 + " won!");
		resetGame();
		return;
	}
	
	//third vertical row
	 if(box3===box6 && box6===box9 && box3===box9 && box3!=="*"){
		alert(box3 + " won!");
		resetGame();
		return;
	}
	
	//first diagonal
	 if(box1===box5 && box5===box9 && box1===box9 && box1!=="*"){
		alert(box1 + " won!");
		resetGame();
		return;
	}
	
	//second diagonal
	 if(box3===box5 && box5===box7 && box3===box7 && box3!=="*"){
		alert(box3 + " won!");
		resetGame();
		return;		
	} 
	
	checkAllMarked();	
	
}	
	
	//if there is no winner
	function checkAllMarked(){
		const box1 = upperLeft.innerText;
		const box2 = upperCenter.innerText;
		const box3 = upperRight.innerText;
		const box4 = middleLeft.innerText;
		const box5 = middleCenter.innerText;
		const box6 = middleRight.innerText;
		const box7 = bottomLeft.innerText;
		const box8 = bottomCenter.innerText;
		const box9 = bottomRight.innerText;
		
		if(box1 !=="*" && box2!=="*" &&
		box3!== "*" && box4!== "*" &&
		box5 !== "*" && box6!== "*" &&
		box7!== "*" && box8!== "*"){
			
			alert("Cat's game!");
			resetGame();
		}
	}
	
function resetGame(){
	upperLeft.innerText = "*";
	upperCenter.innerText = "*";
	upperRight.innerText = "*";
	middleLeft.innerText = "*";
	middleCenter.innerText = "*";
	middleRight.innerText = "*";
	bottomLeft.innerText = "*";
	bottomCenter.innerText = "*";
	bottomRight.innerText = "*";
	
	upperLeft.classList.remove("cross");
	upperCenter.classList.remove("cross");
	upperRight.classList.remove("cross");
	middleLeft.classList.remove("cross");
	middleCenter.classList.remove("cross");
	middleRight.classList.remove("cross");
	bottomLeft.classList.remove("cross");
	bottomCenter.classList.remove("cross");
	bottomRight.classList.remove("cross");
	
	upperLeft.classList.remove("circle");
	upperCenter.classList.remove("circle");
	upperRight.classList.remove("circle");
	middleLeft.classList.remove("circle");
	middleCenter.classList.remove("circle");
	middleRight.classList.remove("circle");
	bottomLeft.classList.remove("circle");
	bottomCenter.classList.remove("circle");
	bottomRight.classList.remove("circle");
	
	addCross= true;
}




