// WhatsApp Booking Functionality
document.addEventListener('DOMContentLoaded', function() {
    const bookButton = document.getElementById('bookButton');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const serviceSelect = document.getElementById('service');
    const messageInput = document.getElementById('message');
    const serviceCards = document.querySelectorAll('.service-card');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const navBackdrop = document.getElementById('navBackdrop');

    // Function to close mobile menu
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        if (navBackdrop) navBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Function to open mobile menu
    function openMobileMenu() {
        mobileMenuToggle.classList.add('active');
        mainNav.classList.add('active');
        if (navBackdrop) navBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Mobile Menu Toggle
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close menu when clicking on backdrop
        if (navBackdrop) {
            navBackdrop.addEventListener('click', closeMobileMenu);
        }

        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // WhatsApp phone number (India format)
    const whatsappNumber = '919074698446';

    // Service card click handler - auto-select in dropdown
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            
            // Remove selected class from all cards
            serviceCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Set the service in dropdown
            serviceSelect.value = service;
            
            // Scroll to booking section
            document.getElementById('booking').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Focus on name input
            setTimeout(() => {
                nameInput.focus();
            }, 500);
        });
    });

    // Form submission handler
    bookButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Get form values
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const service = serviceSelect.value;
        const message = messageInput.value.trim();

        // Validation
        if (!name) {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }

        if (!phone) {
            alert('Please enter your phone number');
            phoneInput.focus();
            return;
        }

        // Basic phone validation
        const phoneRegex = /^[0-9]{10}$/;
        const phoneClean = phone.replace(/\D/g, '');
        
        if (phoneClean.length < 10) {
            alert('Please enter a valid 10-digit phone number');
            phoneInput.focus();
            return;
        }

        if (!service) {
            alert('Please select a class');
            serviceSelect.focus();
            return;
        }

        // Create WhatsApp message
        let whatsappMessage = `Hello! I would like to book a class.\n\n`;
        whatsappMessage += `Name: ${name}\n`;
        whatsappMessage += `Phone: ${phoneClean}\n`;
        whatsappMessage += `Class: ${service}\n`;
        
        if (message) {
            whatsappMessage += `\nMessage: ${message}`;
        }

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Optional: Show success message
        showSuccessMessage();
    });

    // Show success message after booking
    function showSuccessMessage() {
        const buttonText = bookButton.innerHTML;
        bookButton.innerHTML = '<span>✓ Booking Link Opened!</span>';
        bookButton.style.backgroundColor = '#25D366';
        bookButton.disabled = true;
        
        setTimeout(() => {
            bookButton.innerHTML = buttonText;
            bookButton.style.backgroundColor = '#25D366';
            bookButton.disabled = false;
            
            // Optional: Reset form
            // document.querySelector('.booking-form').reset();
        }, 3000);
    }

    // Phone number formatting
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and form
    document.querySelectorAll('.service-card, .booking-form, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

