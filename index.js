// Ex 1

// const sortLetters = (phrase) => {
//   return phrase.toLowerCase().split("").sort().join("")
// }

// console.log(sortLetters("konexio"))


// Ex 2

const countEach = (phrase) => {

  let xs = 0
  let os = 0

  for(let i = 0; i < phrase.length; i++){

    if(phrase[i].toLowerCase() == 'x'){
      xs += 1
    }else{
      os += 1
    }
  }

  if(os == xs){
    return true
  }else{
    return false
  }
}

console.log(countEach("xoooxooxo"))
console.log(countEach("xoxoxoxo"))

// Ex 3

// const isPalindrome = (phrase) => {
//   if (phrase == phrase.split("").reverse().join("")){
//     return "Palindrome !"
//   }else{
//     return "Nope"
//   }
// }

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("laptop"))


// Ex 4

//  const swap = (phrase) => {
//   let swapped = ""
//   for (let i=0; i<phrase.length; i++){
//     if(phrase[i] == phrase[i].toUpperCase()){
//       swapped += phrase[i].toLowerCase()
//     }else{
//       swapped += phrase[i].toUpperCase()
//     }
//   }
//   return swapped
// }

// console.log(swap("Hello World"))


// Ex 5

// const makeItSpongeBob = (phrase) => {

//   let swapped = ""
//   for (let i=0; i<phrase.length; i++){
//     if(i % 2 == 0 ){
//       swapped += phrase[i].toUpperCase()
//     }else{
//       swapped += phrase[i].toLowerCase()
//     }
//   }
//   return swapped

// }

// console.log(makeItSpongeBob("Javascript is easy"))


// Ex 6

// const sortLetters = (phrase) => {
//   return phrase.toLowerCase().split("").sort().join("")
// }

// console.log(sortLetters("KonExio"))

// Ex 7