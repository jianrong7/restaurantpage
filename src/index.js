import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';

const clearContent = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  Header.setHeader();
}
const displayHome = () => {
  clearContent();
  Home.setHome();
}
const displayMenu = () => {
  clearContent();
  Menu.setMenu();
}
const displayContact = () => {
  clearContent();
  Contact.setContact();
}

document.addEventListener('DOMContentLoaded', () => {
  Header.setHeader();
  Home.setHome();
  Contact.setContact();

  const menuBtn = document.getElementById("viewMenu");
  const homeNav = document.getElementById("home");
  const menuNav = document.getElementById("menu");
  const contactNav = document.getElementById("contact");

  menuBtn.addEventListener("click", displayMenu)
  homeNav.addEventListener("click", displayHome)
  menuNav.addEventListener("click", displayMenu)
  contactNav.addEventListener("click", displayContact)
});