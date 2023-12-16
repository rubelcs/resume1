const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const menu = document.getElementById("menu");
const everyLi = document.querySelectorAll("#menu li");

function menuStyle(hamburgerStyle, closeMenuStyle, menuStyle) {
  hamburger.style.display = hamburgerStyle;
  closeMenu.style.display = closeMenuStyle;
  menu.style.width = menuStyle;
}
function iconToggle() {
  hamburger.addEventListener("click", () => {
    menuStyle("none", "block", "300px");
  });
  closeMenu.addEventListener("click", () => {
    menuStyle("block", "none", "0px");
  });
  everyLi.forEach((li) =>
    li.addEventListener("click", () => {
      menuStyle("block", "none", "0px");
    })
  );
}
iconToggle();
