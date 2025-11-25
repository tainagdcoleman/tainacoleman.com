// Navigation Toggle for Mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link (instant close, no animation)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Add instant-close class to skip transitions
        navLinks.style.transition = 'none';
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');

        // Reset transitions after a brief delay
        setTimeout(() => {
            navLinks.style.transition = '';
        }, 50);
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or an empty anchor
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animate publication cards
    const publications = document.querySelectorAll('.publication');
    publications.forEach((pub, index) => {
        pub.style.opacity = '0';
        pub.style.transform = 'translateY(20px)';
        pub.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(pub);
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Active navigation link highlighting with URL anchor updates
let isScrolling = false;
let currentSection = '';

function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = navbar.offsetHeight;
    const scrollPosition = window.pageYOffset + navHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const currentId = section.getAttribute('id');

            // Only update if section has changed
            if (currentId !== currentSection) {
                currentSection = currentId;

                // Remove active class from all links
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to current link
                const activeLink = document.querySelector(`.nav-links a[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }

                // Update URL hash without scrolling
                if (history.replaceState) {
                    history.replaceState(null, null, `#${currentId}`);
                }
            }
        }
    });
}

// Debounced scroll handler for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            setActiveNavLink();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

window.addEventListener('load', () => {
    // Handle initial hash in URL
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    setActiveNavLink();
});

// Scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Scroll to top');

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();
