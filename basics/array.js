// let array = [10,20,30,40,50]
// let aray2 = [200,300,400,500,600]

// console.log(array[0])
// console.table({array,aray2})
// console.log(array)
// array.push(6)
// array.push(6)
// array.push(6)
// array.push(6)
// console.log(array)
let arr1 = [0,1,2,3,4,5];
console.log(arr1.includes(0));
let slice = arr1.slice(0,4)
console.log(slice)
console.log("A", arr1)
let splice = arr1.splice(0,3) // modify the original array
console.log("B",arr1) // only rest of part will be in the array
console.log(splice);