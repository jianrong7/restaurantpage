const Header = (() => {
    const setHeader = () => {
      const content = document.getElementById('content');
  
      const header = document.createElement('header');
      const name = document.createElement('div');
      
      name.innerText = 'Eastern Café';

      const nav = document.createElement('nav');
      const ul = document.createElement('ul');
      const liHome = document.createElement('li');
      const liMenu = document.createElement('li');
      const liContact = document.createElement('li');
      liHome.setAttribute('id', 'home');
      liMenu.setAttribute('id', 'menu');
      liContact.setAttribute('id', 'contact');
      liHome.innerText = 'Home';
      liMenu.innerText = 'Menu';
      liContact.innerText = 'Contact Us';
  
      ul.appendChild(liHome);
      ul.appendChild(liMenu);
      ul.appendChild(liContact);
  
      nav.appendChild(ul);
  
      header.appendChild(name);
      header.appendChild(nav);
  
      content.appendChild(header);
    };
  
    return { setHeader };
  })();
  
  export default Header;