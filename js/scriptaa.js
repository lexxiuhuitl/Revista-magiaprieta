const arrow = document.getElementById("head");

function retrasoHide() {
  arrow.classList.add("hide");
}

function retrasoGone() {

  arrow.classList.add("gone");
  setTimeout(retrasoHide, 2500);

}

function init() {
  setTimeout(retrasoGone, 7000);
}
window.onload(init());
