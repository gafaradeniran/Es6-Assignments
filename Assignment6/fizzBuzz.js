
//program that prints 1-100, 3 prints fizz, 5 prints buzz, both multiples print FizzBuzz

for (let i=1; i<=100; i++){
  if(i % 3===0 && i % 5===0){ //for multiples of 3 and 5
    console.log("FizzBuzz");
  }
  
  else if(i % 3 ===0){ //for multiples of 3
    console.log("Fizz");
  } 
    else if(i % 5===0){ //for multiples of 5 
    console.log("Buzz");
  } 
     
    else {
  console.log(i); // prints other numbers
    }
}

//Extra credit to print prime numbers


for (let i= 1; i<=100; i++){
  
  var isPrime = true; 
  
  for(let j = 2; j <= (i-1); j++){ //sets prime no counter to 2
    if (i % j ===0 && i !==j){ //not prime if current operation has a remainder of 0 or counter is not equal to prime counter
      isPrime = false;
      
    } 
  }
    if (isPrime===true && i!==1) { //prints prime if number is not equal to 1
      console.log("prime");
    }
  
  
   else if(i % 3===0 && i % 5===0){ //prints multiples of 3 and 5
    console.log("FizzBuzz");
  }
  
  
  else if(i % 3 ===0){
    console.log("Fizz"); //prints multiples of 3
  } 
    else if(i % 5===0){
    console.log("Buzz"); //prints multiples of 5
  } 
     
    else {
  console.log(i); //prints other numbers that donot satisfy the above conditions
    }
}


