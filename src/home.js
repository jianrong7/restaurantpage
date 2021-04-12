import { pageLoad } from "./pageLoad"
const renderHomePage = (() => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = ''
    pageLoad()
    const home = document.createElement('div');
    home.innerHTML = `
    <div class="backgroundImage">
    </div>
    <div class="detailsContent">
        <div class="details">
            <p>Delicious donuts!</p>
            <button class="menu nav menuNav">Menu</button>
        </div>
        <div class="locDateContent">
            <div class="locDate">
                <p>1024 Oakwood Ave Singapore</p>
                <p>Mon-Fri: 8am - 8pm</p>
                <p>Fri - Sun: 8am - 11pm</p>
            </div>
        </div>
    </div>`

    contentContainer.appendChild(home)
});
export { renderHomePage }