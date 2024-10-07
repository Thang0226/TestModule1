function sumOfDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function areFriendlyNumbers(a, b) {
  if (a <= 0 || b <= 0) {
    return false;
  }

  let sum_divisors_a = sumOfDivisors(a);
  let sum_divisors_b = sumOfDivisors(b);

  return sum_divisors_a === b && sum_divisors_b === a;
}

let num1 = 220,
  num2 = 284;
let num3 = 123,
  num4 = 456;
console.log(areFriendlyNumbers(num1, num2));
console.log(areFriendlyNumbers(num3, num4));
