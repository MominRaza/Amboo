function toggleMenu() {
  document.body.classList.toggle("menu-active");
}

function toggleModal(target) {
  modal = document.getElementById(target);
  modal.classList.toggle("modal-active");
}

function toggleSubMenu(subMenu) {
  subMenu.classList.toggle("submenu-active");
}
