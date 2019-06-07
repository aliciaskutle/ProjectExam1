var toggleNav = () => {
  var menuButton = document.getElementById("menu-button");
  var mainNav = document.getElementById("main-nav");

  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("show-nav");
  });
};

toggleNav();
