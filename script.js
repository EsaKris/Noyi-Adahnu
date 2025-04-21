document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Format phone number for Nigeria (remove leading 0, add 234)
            const formattedNumber = '2349155775787';
            
            // Create WhatsApp message
            const whatsappMessage = `Hi Noyi,\n\nMy name is ${name}.\n\n${message}\n\nYou can reach me at: ${email}`;
            
            // Create the WhatsApp URL
            const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Create a hidden link and click it (works around popup blockers)
            const link = document.createElement('a');
            link.href = whatsappUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Reset form
            contactForm.reset();
        });
    }
});