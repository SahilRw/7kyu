// DESCRIPTION:
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// my solution
function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(e => e.includes('rotten') ? e.slice(6).toLowerCase() : e) : []
}

// function removeRotten(bagOfFruits){
//   let result = []
//   if(bagOfFruits){
//     for(let i = 0; i < bagOfFruits.length; i++){
//       let fruit = bagOfFruits[i];
//       if(fruit.includes('rotten')) {
//         result.push(fruit.slice(6).toLowerCase())
//          } else {
//             result.push(fruit)
//           }
//         }
//       } 
//   return result
// }