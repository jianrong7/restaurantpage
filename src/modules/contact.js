const Contact = (() => {
    const addForm = () => {
      const emailDiv = document.createElement('div');

      emailDiv.classList.add("email");
      
      const form = document.createElement('form');

      form.innerHTML = `
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Message:</label><br>
        <input type="text" id="message" name="message" cols="30" rows="10"><br>
        <input type="submit" value="Submit">
      `;
  
      emailDiv.appendChild(h3);
      emailDiv.appendChild(form);
  
      return form;
    };
  
    const addInfoSection = () => {
      const section = document.createElement('div');
      section.classList.add('details');
  
      const openingHoursInfo = document.createElement('div');
      openingHoursInfo.innerHTML = `
        <i class="fas fa-coffee"></i>
        <h3>Opening Hours</h3>
        <p>7:00am - 10:00pm</p>
      `;
  
      const phoneInfo = document.createElement('div');
      phoneInfo.innerHTML = `
        <i class="fas fa-phone"></i>
        <h3>Phone</h3>
        <p>+1-204-444-0237</p>
      `;
  
      const emailInfo = document.createElement('div');
      emailInfo.innerHTML = `
        <i class="fas fa-envelope"></i>
        <h3>Email</h3>
        <p>enquiry@lorem.cafe</p>
      `;
  
      const locationInfo = document.createElement('div');
      locationInfo.innerHTML = `
        <i class="fas fa-map-marked-alt"></i>
        <h3>Location</h3>
        <p>Somewhere in Lorem</p>
      `;
  
      section.appendChild(openingHoursInfo);
      section.appendChild(phoneInfo);
      section.appendChild(emailInfo);
      section.appendChild(locationInfo);
  
      return section;
    };
  
    const setContact = () => {
      const content = document.getElementById('content');
  
      const main = document.createElement('main');
      main.classList.add('contact-main');
  
      const form = addForm();
      const section = addInfoSection();
  
      main.appendChild(form);
      main.appendChild(section);
  
      content.appendChild(main);
    };
  
    const setContactActive = () => {
      const liContact = document.getElementById('contact');
      liContact.classList.add('active');
    };
  
    return { setContact, setContactActive };
  })();
  
  export default Contact;