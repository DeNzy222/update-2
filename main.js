const fav = document.getElementById("fav");
const sideClick = document.getElementById("sd-click");
const Sidebar = document.getElementById("sidebar");
const clIcon = document.getElementById("clSide");

var isShow = true;

function toggle() {
  if (isShow) {
    fav.style.fill = "white";
    isShow = false;
  } else {
    fav.style.fill = "#39C0D4";
    isShow = true;
  }
}

function toggleSidebar() {
  if (isShow) {
    Sidebar.style.transform = "translateX(0%)";
    isShow = false;
  } else {
    Sidebar.style.transform = "translateX(-100%)";
    isShow = true;
    Sidebar.style.transition = ".7s ease";
  }
}

function toggleClSidebar() {
  if (isShow) {
    Sidebar.style.transform = "translateX(0%)";
    isShow = false;
  } else {
    Sidebar.style.transform = "translateX(-100%)";
    isShow = true;
    Sidebar.style.transition = ".7s ease";
  }
}

toggleClSidebar();
toggleSidebar();
toggle();
