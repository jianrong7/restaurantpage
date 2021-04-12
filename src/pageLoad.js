const pageLoad = (() => {
    const contentContainer = document.querySelector('#content');
    
    const header = document.createElement("header");
    header.innerHTML = `
    <img src="assets/favicon.png" id="logo">
    <div class="navBar">
        <a class="homeNav nav">Home</a>
        <a class="menuNav nav">Menu</a>
        <a class="contactNav nav">Contact</a>
    </div>`;
    header.classList.add('header');

    contentContainer.appendChild(header);
});
export { pageLoad };