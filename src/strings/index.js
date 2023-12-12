const split = (str, delim) => {
  // write code for strings.split
    return str.split(delim);
  }
  console.log(split('a-new-string', '-'))
  console.log(split('a-new-string', '-').length)
  console.log(split('a-new-string', '-')[0])
  console.log(split('a-new-string', '-')[1])
  console.log(split('a-new-string', '-')[2])

const pairs = (str) => {
  // write code for strings.pairs
    let letters = str.split('');
    let result = []
    for (i=0; i < letters.length; i+=2) {
      let newArr = []
      newArr.push(letters[i],letters[i+1])
      result.push(newArr.join(''))
    };
    return result
}
console.log(pairs('abcdefgh'))

const reverse = (str) => {
  // write code for strings.reverse
 
    return str.split("").reverse().join("")
}
console.log(reverse('hello'))

module.exports = {
  split,
  pairs,
  reverse
}