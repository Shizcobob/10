/*
  Input: arr, callback
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

const numbers1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const numbers2 = [...numbers1];
const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const numbers3 = [...numbers1];
const callback3 = (elem) => false;
const expected3 = [];





/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {}


function dropIt(arr, cb) {

  function dropIt(array, cb) { 
    const result = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

    if (cb(array[i])) {
        console.log(array[i]) 
        break;
    }

    else {
        array.shift()
        i--
        
    } 
        
    }

    return array

}
console.log(dropIt(numbers3, callback3))


  let results = [];
  for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
          results.push(arr[i]);
      }
  }
  return results;
}

console.log(dropIt(numbers1, callback1))
console.log(dropIt(numbers2, callback2))
console.log(dropIt(numbers3, callback3))


const dropItLikeItsHot = ( array, callback ) => {

  return array.filter( element => callback( element ) );

};