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
//let arr1 = [0,1,2,3,4,5];
// console.log(arr1.includes(0));
// let slice = arr1.slice(0,4)
// console.log(slice)
// console.log("A", arr1)
// let splice = arr1.splice(0,3) // modify the original array
// console.log("B",arr1) // only rest of part will be in the array
// console.log(splice);

// let arr = ["ram ", "aam","shyam", "khata", "hai"]
// let arr2 = ["delhi", "Mubae", "India","pakistan"]
// arr.push(arr2);
// // console.log(arr);
// // console.log( " ye hai fifth element",arr[5])
//  let newarray = arr.concat(arr2);
// console.log("new array", newarray);


// let first = [12,3,4,5,6,7]
// let second = [10,23,45,5,50];
// let newarray = first.concat(second);
// console.log(newarray)

//-------------------------------------------------/spread operator----

let first = [10,20,30,40]
let second = [50,60,70,70]
let final = [...first,...second];
console.log(final)
