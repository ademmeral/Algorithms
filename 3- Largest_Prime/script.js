const sortPrimes = function (n){

  if (n < 2) throw new Error('Primes start from 2');

  let flag = true;
  let largestPrime = 2;
  for(let x = 3; x <= n; x++) {

    for (let y = 2; y < x; y++) {
      if (x % y === 0) {
        flag = false;
        break;
      } else flag = true;

      if(flag) largestPrime = x;
    }
  }

  return largestPrime;
}

console.log( sortPrimes(18) )

