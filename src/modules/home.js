const Home = (() => {
    const setHome = () => {
      const content = document.getElementById('content');
  
      const main = document.createElement('div');
      main.classList.add('home');
  
      const div1 = document.createElement('div');

      div1.innerText = 'We offer the best';
  
      const div2 = document.createElement('div');
      div2.setAttribute('id', 'highlights');
      div2.innerHTML = "korean. japanese. fusion.";
  
      const button = document.createElement('button');
      button.setAttribute('id', 'viewMenu');
      button.setAttribute('type', 'button')
      button.innerText = 'View our menu';
  
      main.appendChild(div1);
      main.appendChild(div2);
      main.appendChild(button);
  
      content.appendChild(main);
    };
  
    const setHomeActive = () => {
      const liHome = document.getElementById('home');
      liHome.classList.add('active');
    };
  
    return { setHome };
  })();
  
  export default Home;