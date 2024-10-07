class Book {
  constructor(id, name, year, count) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.count = count;
    this.isAvailable = this.checkCount();
  }

  checkCount() {
    if (this.count > 0) return true;
    else return false;
  }
}

let library = [];

function openAddWindow() {
  window.open("addNewBook.html", "_blank");
}

function addNewBook(id, name, year, count) {
  let new_book = new Book(id, name, year, count);
  library.push(new_book);
}

function displayBooks() {
  let s = "";

  s +=
    "<table><tr><th>Mã số sách</th><th>Tên sách</th><th>Năm xuất bản</th><th>Số quyển</th><th>Tình trạng</th></tr>";

  for (let i = 0; i < library.length; i++) {
    s += "<tr>";
    s += `<td>${library[i].id}</td>`;
    s += `<td>${library[i].name}</td>`;
    s += `<td>${library[i].year}</td>`;
    s += `<td>${library[i].count}</td>`;
    s += `<td>${library[i].isAvailable}</td>`;
    s += "</tr>";
  }

  s += "</table>";

  document.getElementById("display").innerHTML = s;
}
