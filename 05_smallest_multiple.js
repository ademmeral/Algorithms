function smallestMultiple(start = 1, end) {
  console.time("es5");
  if (!end) throw new Error("The function requires two parameters!");
  if (end > 100 || start < 1) throw new Error("It is not acceptable!");

  for (let x = end; x < Infinity; x+=end) {
    let flag = true;
    for (let y = start; y <= end; y++) {
      if (x !== y && x % y !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.timeEnd('es5')
      return x;
    }
  }
}
console.log(smallestMultiple(1, 20));


// function smallestCommons(arr) {
//   console.time('es6')
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const range = Array(max - min + 1)
//     .fill(0)
//     .map((_, i) => i + min);
//   // Largest possible value for SCM
//   const upperBound = range.reduce((prod, curr) => prod * curr);
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     // Check if every value in range divides 'multiple'
//     const divisible = range.every((value) => multiple % value === 0);
//     if (divisible) {
//       console.timeEnd('es6')
//       return multiple;
//     }
//   }
// }

// console.log(smallestCommons([1, 20]))
