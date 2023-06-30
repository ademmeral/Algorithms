function SSDiff(start, end){
  const numbs = [...Array(end - start + 1).keys()]
    .map(el => (el + start));
  const squares = numbs.map(el => el**2);
  const squareOfsum = numbs.reduce((acc, curr) => acc += curr)**2
  const allSquareSum = squares.reduce((acc, curr) => acc += curr)

  return squareOfsum - allSquareSum
}
console.log(SSDiff(1,10))