function fibonacciModified(input) {
  let t1 = 0,
    t2 = 1,
    n = input;
  // Write your code here
  for (let index = 0; index < n; index++) {
    if (3 <= n <= 20 && 0 <= (t1 && t2) <= 2) {
      t1 = t2;
      t2 = n;
      n = t1 + t2 ** 2;
      return n;
    }
  }
}
console.log(fibonacciModified(2));
