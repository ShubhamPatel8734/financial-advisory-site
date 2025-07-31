
// To call the header.html file
document.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (headerPlaceholder) {
    fetch("header.html")
      .then((res) => res.text())
      .then((data) => {
        headerPlaceholder.innerHTML = data;
      });
  }

  if (footerPlaceholder) {
    fetch("footer.html")
      .then((res) => res.text())
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
  }

});