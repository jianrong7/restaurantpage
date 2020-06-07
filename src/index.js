import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';

const clearContent = () => {
  const content = document.getElementById('content');
  const listItems = document.querySelectorAll('header li');

  content.removeChild(content.lastChild);
};
const displayHome = () => {
  clearContent();
  Home.setHome();


  const menuBtn = document.getElementById("viewMenu");
  menuBtn.addEventListener("click", displayMenu);
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