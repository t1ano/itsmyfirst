// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector('textarea').value;
    
    // In a real application, you would send this data to a server
    // For demonstration, we'll just show an alert
    alert(`Terima kasih ${name}! Pesan Anda telah dikirim.\n\nSaya akan membalas ke ${email} sesegera mungkin.`);
    
    // Reset form
    this.reset();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.padding = '0';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.padding = '';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio item click event
document.querySelectorAll('.portfolio-item .btn-small').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get portfolio item info
        const portfolioItem = this.closest('.portfolio-item');
        const title = portfolioItem.querySelector('h3').textContent;
        const description = portfolioItem.querySelector('p').textContent;
        
        // Show modal or alert with details
        alert(`Proyek: ${title}\n\n${description}\n\n(Fitur detail proyek dapat ditambahkan di sini)`);
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section, .portfolio-item, .profile-card').forEach(el => {
    observer.observe(el);
});

// Initialize with some console log
console.log('Website Portofolio siap digunakan!');
console.log('Jangan lupa untuk mengubah konten sesuai dengan informasi pribadi Anda.');