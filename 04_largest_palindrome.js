function isPalindrome(n){
  if (n.toString().length < 2) return true;
  const rev = n.toString().split('').reverse().join('');
  return +rev == n; 
}

function palindromise(n){

  while( !isPalindrome(n) ) {
    const rev = n.toString().split('').reverse().join('');
    n += +rev;
  }
  return n;
}

// console.log( palindromise(2) )
// console.log(palindromise(2))

function largestPalindrome(d){
  // variables
  const sub = Math.pow(10, d-1)
  let dgt = Math.pow(10, d) - 1;
  let largest = -Infinity;
  // some curly braces :/
  for(let x = dgt; x > sub; x --) {
    for (let y = dgt; x > sub; y--) {
      let mult = x * y;
      if (mult < largest) break
      else if ( isPalindrome(mult) && mult > largest ) 
        largest = mult;
    }
  }
  return largest;
}

console.log(largestPalindrome(3))