// Add interactivity here
document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', () => {
      alert('Thank you for selecting a plan! We will contact you shortly.');
    });
  });
  
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  });