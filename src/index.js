import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';

document.addEventListener('DOMContentLoaded', () => {
  Header.setHeader();
  Home.setHome();
  Menu.setMenu();

});