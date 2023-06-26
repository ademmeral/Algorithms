const sortPrimes = function (n){
  let isPrime = true;
  const primes = [2];

  if (n < 2) throw new Error('Primes starts with 2');

  for(let x = 3; x <= n; x++) {

    for (let y = 2; y < x; y++) {
      if (x % y === 0) {
        isPrime = false;
        break;
      } else isPrime = true;
    }

    if (isPrime) primes.push(x);
  }

  return primes;
}

console.log( sortPrimes(210) )

