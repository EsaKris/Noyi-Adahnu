document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements (not just values)
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Get trimmed values
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            // Validate form
            if (!name) {
                alert('Please enter your name');
                nameInput.focus();
                return;
            }
            
            if (!email) {
                alert('Please enter your email address');
                emailInput.focus();
                return;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert('Please enter a valid email address');
                emailInput.focus();
                return;
            }
            
            if (!message) {
                alert('Please enter your message');
                messageInput.focus();
                return;
            }
            
            // Disable submit button to prevent multiple submissions
            submitBtn.disabled = true;
            submitBtn.textContent = 'Redirecting...';
            
            // Nigeria WhatsApp number (formatted without + or 0)
            const whatsappNumber = '2349155775787';
            
            // Create formatted message
            const whatsappMessage = `Hello Noyi,\n\nMy name is ${name}\n\n${message}\n\nYou can contact me at: ${email}`;
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            try {
                // Open WhatsApp in new tab (works better with popup blockers)
                window.open(whatsappUrl, '_blank');
                
                // Reset form
                contactForm.reset();
            } catch (error) {
                console.error('Error opening WhatsApp:', error);
                alert('Could not open WhatsApp. Please try again.');
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }
});