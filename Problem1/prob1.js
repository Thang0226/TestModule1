let n;
do {
  n = +prompt("Nhap vao so luong phan tu cua mang:");
} while (n <= 0 || n > 50 || n % 1 != 0);

let arr = [];
for (let i = 0; i < n; i++) {
  let num = +prompt(`Nhap vao phan tu thu ${i + 1} cua mang:`);
  arr.push(num);
  document.getElementById(
    "display"
  ).innerHTML = `Cac phan tu cua mang: <br> ${arr.join(", ")}`;
}

let total = 0;
let count = 0;
for (let i = 0; i < n; i += 2) {
  if (arr[i] % 2 == 1) {
    total += arr[i];
    count++;
  }
}
let average = NaN;
if (count > 0) average = total / count;

alert(`Trung binh cong cac so le o vi tri chan cua mang: ${average}`);
