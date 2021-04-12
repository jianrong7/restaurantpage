import { pageLoad } from "./pageLoad"
const renderContactPage = (() => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = ''
    pageLoad()
    const contact = document.createElement('div');
    contact.innerHTML = `
    <div class="contactContainer">
    <p class="contactHead">Contact</p>
    <div class="contactDetail">
        <div class="contactDetails">
            <div class="locationDet">1024 Oakwood Ave Singapore</div>
            <div class="timeDet">
                <p>Mon-Fri: 8am - 8pm</p>
                <p>Fri - Sun: 8am - 11pm</p>
            </div>
            <div class="numberDet">(+65)-9123 4567</div>
            <div class="form">
                <p>Message Us</p>
                <form>
                    <input type="text" id="name" name="name" placeholder="Name" required />
                    <input type="text" id="mail" name="mail" placeholder="Email" required />
                    <input type="text" id="message" name="message" placeholder="Tell us something!" size="50" required />
                    <input type="submit" id="submit" value="Send">
                </form>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3851330165996!2d103.78537780119672!3d1.3132955464954452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a667be501db%3A0x19a7d96f19188858!2sJoo%20Fong%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1618218618330!5m2!1sen!2ssg" width="700" height="500" id="map" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</div>`

    contentContainer.appendChild(contact)
    const form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        form.reset()
    })
});
export { renderContactPage }