// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) { // 100% correct, 100% performance
    let sortedA = A.sort((a, b) => a - b)
    if (sortedA[0] > 1 || sortedA[0] < 0) { // if the first number is not 1 or 0
        return 1
    }
    for (let i = 0; i < sortedA.length; i += 1) {// if the first number is 1 or 0
        if (sortedA[i + 1] - sortedA[i] > 1) { // if the next number is more than 1 away from the current number
            return sortedA[i] + 1
        }
    }
    return sortedA[sortedA.length - 1] + 1 // if the last number is the smallest number
}

// function solution(A) {
//     assortedA = A.sort((a, b) => a - b)
// 
//     }
//     if (assortedA[0] < 0 || assortedA[0] > 1 || assortedA.length <= 1) {
//         return 1
//     }
//
//     const newA = []
//     for (let i = 0; i < assortedA.length; i += 1) {
//         let tempI = assortedA[i + 1] - assortedA[i]
//         for (let x = 1; x < tempI; x += 1) {
//             newA.push(assortedA[i] + x)
//         }
//     }
//     if (newA.length === 0) {
//         return assortedA[assortedA.length - 1] + 1
//     }
//     assortedNewA = newA.sort((a, b) => a -b)
//     return assortedNewA[0]

// } 


// optimized solution
function solution(A) {
    let minPositiveInt = 1;
    let sortedA = A.sort((a, b) => a - b);
  
    for (let i = 0; i < sortedA.length; i++) {
      if (sortedA[i] === minPositiveInt) {
        minPositiveInt++;
      } else if (sortedA[i] > minPositiveInt) {
        return minPositiveInt;
      }
    }
  
    return minPositiveInt;
  }
    

// console.log(solution([0, 3]))



