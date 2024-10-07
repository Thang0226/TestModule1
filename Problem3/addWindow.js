function submitBook() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let year = document.getElementById("year").value;
  let count = document.getElementById("count").value;

  // Access the opener window and call the addNewBook function and display book list again
  if (window.opener && !window.opener.closed) {
    window.opener.addNewBook(id, name, year, count);
    window.opener.displayBooks();
  }

  window.close();
}
