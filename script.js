document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inquiry-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;
        const message = document.getElementById('message').value;
        
        // You can perform further actions here, like sending the inquiry to a server
        
        alert(`Inquiry submitted:\nName: ${name}\nEmail: ${email}\nCourse: ${course}\nMessage: ${message}`);
        
        // Clear the form fields after submission
        form.reset();
    });
});
