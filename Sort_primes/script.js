const sortPrimes = function (n){

  return [...Array(n).keys()].slice(3)
    .reduce((acc, curr) => {

      const cond = [...Array(curr).keys()].slice(2)
        .every(int => curr % int != 0);

      if( cond ) acc.push(curr);

      return acc;

    }, [])
}

