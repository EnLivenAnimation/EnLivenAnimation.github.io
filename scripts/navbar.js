function displayDropdown(id) {
  const dropdowns = document.getElementsByClassName("show");
  for (i = 0; i < dropdowns.length; i ++) {
    dropdowns[i].classList.remove("show");
  }
  document.getElementById(id).classList.toggle("show");
}