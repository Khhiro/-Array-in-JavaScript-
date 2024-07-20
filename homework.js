// task1
// function test(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }console.log(test([2, 4, 6, 8]));


// task2
// function test(arr) {
//     return Math.max(...arr);
// }
// console.log(test([3, 8, 1, 6, 2])); 
// console.log(test([1, 2, 5, 7, 9]));  
// console.log(test([1, 2, 3, 4, 5]));  

// task3
// function test(arr) {
//     let cnt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) { 
//             cnt++;
//         }
//     }
//     return cnt;
// }console.log(test([1, 2, 3, 4, 5, 6])); 

// task4
// function test(arr, sum) {
//     for (let i=0; i<arr.length;i++) {
//         if (arr[i] === sum) {
//             return true;
//         }
//     }
//     return false;
// }console.log(test([10, 20, 30, 40, 50], 30));

//task5
// function test(arr) {
//     let cnt = 0
//     let sum = 0;
//     if (arr.length === 0) {
//         return 0; 
//     }
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     cnt = sum / arr.length;
//     return cnt;
// }console.log(test([2, 4, 6, 8]));