// write a code to check whether num is prime ornot
// let num = 7;
// let count = 0;
// for(let i = 0; i<=num; i++){
//     if(num%i==0){
//         count++;
//     }
// }

// new code
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  

  const number = 17; 
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }

//   demo breanch created