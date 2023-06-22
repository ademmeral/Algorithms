function func({n = 1, evens = false, odds = false}){
  const arr = [1,1];

  for(let i = 1; i < n; i++){
    for (let x = i - 1; x < i; x++) {
      arr.push(arr[i] + arr[x])
    }
  }
  return evens 
    ? arr.filter(n => n % 2 == 0)
    : odds 
    ? arr.filter(n => n % 2 != 0)
    : arr; 

}
console.log(func({n : 15, evens : true}))
console.log(func({n : 15, odd : true}))
