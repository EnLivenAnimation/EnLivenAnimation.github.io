function displayDropdown(id) {
  const dropdowns = document.getElementsByClassName("show");
  for (i = 0; i < dropdowns.length; i ++) {
    dropdowns[i].classList.remove("show");
  }
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.navbar-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}