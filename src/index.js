import { renderHomePage } from "./home"
import { renderMenuPage } from "./menu"
import { renderContactPage } from "./contact"


const addNavEvents = () => {
    const navCells = document.querySelectorAll('.nav')
    navCells.forEach(navCell => {
            navCell.addEventListener('click', e => {
            const { target } = e

            if (target.classList.contains('homeNav')) {
                renderHomePage()
                addNavEvents()
            }
            if (target.classList.contains('menuNav')) {
                renderMenuPage()
                addNavEvents()
            }
            if (target.classList.contains('contactNav')) {
                renderContactPage()
                addNavEvents()
            }
        })
    })
}
const initialLoad = (() => {
    renderHomePage()
    addNavEvents()
})();