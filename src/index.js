import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';

const clearContent = () => {
  const content = document.getElementById('content');
  const listItems = document.querySelectorAll('header li');

  content.removeChild(content.lastChild);
  listItems.forEach(listItem => listItem.classList.remove('active'));
};
const displayHome = () => {
  clearContent();
  Home.setHome();
  Home.setHomeActive();

  const menuBtn = document.getElementById("viewMenu");
  menuBtn.addEventListener("click", displayMenu);
}
const displayMenu = () => {
  clearContent();
  Menu.setMenu();
  Menu.setMenuActive();
}
const displayContact = () => {
  clearContent();
  Contact.setContact();
  Contact.setContactActive();
}

document.addEventListener('DOMContentLoaded', () => {
  Header.setHeader();
  Home.setHome();
  Home.setHomeActive();

  const menuBtn = document.getElementById("viewMenu");
  const logo = document.getElementById("logo");
  const homeNav = document.getElementById("home");
  const menuNav = document.getElementById("menu");
  const contactNav = document.getElementById("contact");

  menuBtn.addEventListener("click", displayMenu)
  logo.addEventListener("click", displayHome)
  homeNav.addEventListener("click", displayHome)
  menuNav.addEventListener("click", displayMenu)
  contactNav.addEventListener("click", displayContact)
});