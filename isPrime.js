function isPrime(n){
  if (n < 2) return false;
  let flag = true
  for(let x = 2; x < n; x++ ) {
    if (n % x === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}