function fibonacci(n) {
  if (typeof n !== "number") {
    console.log("n must be a number");
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let i = 2;
  let x = [0, 1];
  for (i; i <= n; i++) {
    x.push(x[i - 1] + x[i - 2]);
  }
  return x[n];
}


// function fibbonacci() {
//     let x = [0, 1];
//     for (let i = 2; i <= 100; i++) {
//         x.push(x[i - 1] + x[i - 2]);
//     }
//     return x;
// }
