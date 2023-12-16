const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const menu = document.getElementById("menu");
const everyLi = document.querySelectorAll("#menu li");

function menuStyle(hamburgerStyle, closeMenuStyle, menuStyle) {
  hamburger.style.display = hamburgerStyle;
  closeMenu.style.display = closeMenuStyle;
  menu.style.right = menuStyle;
}
function iconToggle() {
  hamburger.addEventListener("click", () => {
    menuStyle("none", "block", "0%");
  });
  closeMenu.addEventListener("click", () => {
    menuStyle("block", "none", "100%");
  });
  everyLi.forEach((li) =>
    li.addEventListener("click", () => {
      menuStyle("block", "none", "100%");
    })
  );
}
iconToggle();
