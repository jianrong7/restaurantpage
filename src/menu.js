import { pageLoad } from "./pageLoad"
const renderMenuPage = (() => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = ''
    pageLoad()
    const menu = document.createElement('div');
    menu.innerHTML = `
    <img src="assets/donutMenu.png" id="menu">
    <table class="menuTable">
        <tr>
            <th>Yeast Donuts</th>
            <th>Vanilla Cake Donuts</th>
            <th>Chocolate Cake Donuts</th>
        </tr>
        <tr>
            <td class="dataTitle">Honey Dip</td>
            <td class="dataTitle">Home Cut</td>
            <td class="dataTitle">Chocolate</td>
        </tr>
        <tr>
            <td class="dataDes">Our most popular donut</td>
            <td class="dataDes">Plain vanilla cake</td>
            <td class="dataDes">Plain chocolate cake dipped in our famous honey glaze</td>
        </tr>
        <tr>
            <td class="dataTitle">Sugar Raised</td>
            <td class="dataTitle">Honey Dew</td>
            <td class="dataTitle">German Chocolate</td>
        </tr>
        <tr>
            <td class="dataDes">Dusted in sugar</td>
            <td class="dataDes">Plain vanilla cake dipped in our famous honey glaze</td>
            <td class="dataDes">Fine sweetened coconut</td>
        </tr>
        <tr>
            <td class="dataTitle">Jelly Filled</td>
            <td class="dataTitle">Cinnamon</td>
            <td class="dataTitle">Dutch Chocolate</td>
        </tr>
        <tr>
            <td class="dataDes">Raspberry jam</td>
            <td class="dataDes">Dusted in cinnamon</td>
            <td class="dataDes">Dusted in our homemade cake crumb & cinnamon sugar topping</td>
        </tr>
        <tr>
            <td class="dataTitle">Blueberry Filled</td>
            <td class="dataTitle">Powdered</td>
            <td class="dataTitle">Double Chocolate</td>
        </tr>
        <tr>
            <td class="dataDes">Blueberry jam</td>
            <td class="dataDes">Dusted in powedered sugar</td>
            <td class="dataDes">Chocolate cake with chocolate icing</td>
        </tr>
    </table>`

    contentContainer.appendChild(menu)
});
export { renderMenuPage }