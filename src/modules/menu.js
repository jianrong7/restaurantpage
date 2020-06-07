const Menu = (() => {
    const menuList = [
      {
        title: 'Korean',
        items: ['fried chicken', 'samgyeopsal', 'samgyetyang'],
      },
      {
        title: 'Japanese',
        items: ['sushi', 'sashimi', 'tempura'],
      }
    ];
  
    const addSection = menu => {
      const section = document.createElement('div');
      section.setAttribute("class", menu.title.toLowerCase())
  
      const h3 = document.createElement('h3');
      h3.innerText = menu.title;
  
      const ul = document.createElement('ul');
  
      menu.items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
      });
  
      section.appendChild(h3);
      section.appendChild(ul);
  
      return section;
    };
  
    const setMenu = () => {
      const content = document.getElementById('content');
  
      const div = document.createElement('div');
      div.classList.add('menu');
  
      menuList.forEach(menu => {
        const section = addSection(menu);
        div.appendChild(section);
      });
  
      content.appendChild(div);
    };
  
    const setMenuActive = () => {
      const liMenu = document.getElementById('menu');
      liMenu.classList.add('active');
    };
  
    return { setMenu };
  })();
  
  export default Menu;