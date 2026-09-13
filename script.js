// Dynamic Mobile Menu Toggle Interaction
const mobileMenuButton = document.getElementById('mobile-menu');
const navigationalLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navigationalLinks.classList.toggle('active');
});

// Reservation form submission interceptor 
const bookingForm = document.getElementById('booking-form');
const confirmationMessage = document.getElementById('form-message');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop webpage from trying to reload automatically

    // Grab input values entered by the user
    const guestName = document.getElementById('name').value;
    const reservedDate = document.getElementById('date').value;

    // Display localized feedback to confirm transaction status safely
    confirmationMessage.textContent = `Thank you, ${guestName}! Your table for ${reservedDate} has been requested successfully.`;
    confirmationMessage.style.display = 'block';

    // Clear input fields automatically after submission
    bookingForm.reset();
});
