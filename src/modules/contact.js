const Contact = (() => {
    const addForm = () => {
      const emailDiv = document.createElement('div');
      emailDiv.classList.add("email");
      
      const h3 = document.createElement('h3');
      h3.innerText = "Send us an email";

      const form = document.createElement('form');

      form.innerHTML = `
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Message:</label><br>
        <input type="text" id="message" name="message"><br>
        <input type="submit" value="Submit">
      `;
  
      emailDiv.appendChild(h3);
      emailDiv.appendChild(form);
  
      return emailDiv;
    };
  
    const addInfoSection = () => {
      const section = document.createElement('div');
      section.classList.add('details');
  
      const openingHoursInfo = document.createElement('div');
      openingHoursInfo.classList.add("openingHours");
      openingHoursInfo.innerHTML = `
        <div class="heading">Opening Hours</div>
        <div>10:00am - 10:00pm</div>
      `;
  
      const phoneInfo = document.createElement('div');
      phoneInfo.classList.add("phone");
      phoneInfo.innerHTML = `
        <div class="heading">Phone</div>
        <div>+65 9999 1111</div>
      `;
  
      const emailInfo = document.createElement('div');
      emailInfo.classList.add("email")
      emailInfo.innerHTML = `
        <div class="heading">Email</div>
        <div>enquiry@eastern.cafe</div>
      `;
  
      const locationInfo = document.createElement('div');
      locationInfo.classList.add("location");
      locationInfo.innerHTML = `
        <div class="heading">Location</div>
        <div>Somewhere in SG</div>
      `;
  
      section.appendChild(openingHoursInfo);
      section.appendChild(phoneInfo);
      section.appendChild(emailInfo);
      section.appendChild(locationInfo);
  
      return section;
    };
    const setContact = () => {
      const content = document.getElementById('content');
  
      const main = document.createElement('div');
      main.classList.add('contact');
  
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