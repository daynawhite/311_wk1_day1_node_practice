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

// describe('Strings module', () => {

//   test('Split a string on the given delimeter', () => {
//     const split = strings.split('a-new-string', '-')
//     expect(split.length).toEqual(3)
//     expect(split[0]).toBe('a')
//     expect(split[1]).toBe('new')
//     expect(split[2]).toBe('string')
//   })

const split = (string, delimeter) => {
  return split(string, delimeter)
}

const pairs = () => {

}

const reversed = () => {

}

module.exports = {
  split,
  pairs,
  reversed
}