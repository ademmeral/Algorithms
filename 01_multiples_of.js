function multiplesOf(nums = [], end){
  return [...Array(end).keys()]
    .reduce((acc, curr) => {
      if ( nums.some(n => curr % n == 0 && curr != 0) ) 
        acc.push(curr);
      return acc;
  }, []).reduce((a,c) => a + c)
}

multiplesOf([3,5], 100);