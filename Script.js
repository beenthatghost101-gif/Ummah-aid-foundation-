// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--background)';
        navbar.style.backdropFilter = 'none';
    }
});

// Form submission handling
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you ${name}! We have received your volunteer application and will contact you at ${email} soon.`);
    
    // Reset form
    this.reset();
});

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Support Ummah Aid Foundation - providing food, water, education and shelter to communities in need across Uganda!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Support Ummah Aid Foundation - providing essential needs to communities in Uganda!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
    const text = encodeURIComponent('Check out Ummah Aid Foundation - they provide food, water, education and shelter to communities in Uganda! ' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Simple animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.program-card, .donation-card, .involved-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Make phone number clickable
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('p:contains("+256")');
    phoneNumbers.forEach(phone => {
        if (phone.textContent.includes('+256')) {
            phone.innerHTML = phone.innerHTML.replace(/\+256\s?\d+\s?\d+/, 
                '<a href="tel:+256745031484" style="color: inherit; text-decoration: none;">+256 745 031484</a>');
        }
    });
});