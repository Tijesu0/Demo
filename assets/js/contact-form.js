document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit
  
    // Get the form data
    const formData = {
      from_name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
  
    // Send the email using EmailJS
    emailjs.send('service_yvhboo1', 'template_iqa44yb', formData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
      });
  });
  