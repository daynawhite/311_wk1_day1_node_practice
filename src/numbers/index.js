const isEven = (num) => {
  // write code for numbers.isEven
    if (num % 2 == 0) {
      return true
    } else {return false}
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((acc,curr) => acc + curr)
  };

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  if (arr.reduce((acc,curr) => acc + curr) === sum) {
    return true
  } else {return false}
  }

module.exports = {
  isEven,
  sum,
  comboSum
}
