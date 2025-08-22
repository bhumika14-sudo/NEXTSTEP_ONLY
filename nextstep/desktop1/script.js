// ====== Elements ======
const signOutBtn = document.querySelector('.signout');
const getStartedBtn = document.querySelector('.btn'); // Corrected selector
const navLinks = document.querySelectorAll('nav a');
const heroImg = document.querySelector('.hero-img'); // Corrected selector
const cards = document.querySelectorAll('.card'); // Corrected selector
const buttons = document.querySelectorAll('button, .btn'); // Corrected selector to include both buttons

// ====== Enhanced Sign Out ======
signOutBtn?.addEventListener('click', () => {
    // Show confirmation dialog
    const confirmSignOut = confirm('Are you sure you want to sign out?');
    
    if (confirmSignOut) {
        // Clear any stored user data
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('userPreferences');
        sessionStorage.clear();
        
        // Show success message
        alert('You have signed out successfully!');
        
        // Optional: Add visual feedback
        signOutBtn.textContent = 'Signing out...';
        signOutBtn.disabled = true;
        
        // Simulate sign out process and redirect
        setTimeout(() => {
            // Reset button
            signOutBtn.textContent = 'Sign Out';
            signOutBtn.disabled = false;
            
            // Redirect to login page or home page
            // window.location.href = '../index.html';
            console.log('User successfully signed out');
        }, 1500);
    }
});

// ====== Get Started Scroll ======
getStartedBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'desktop2/desktop_2_profile.html';
});

// ====== Active Nav Link (Optional) ======
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // This is for demonstration. For a real site, links will navigate.
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ====== Floating Hero Image ======
if (heroImg) {
    let pos = 0;
    let dir = 1;

    function floatHero() {
        pos += 0.8 * dir;
        if (pos > 30 || pos < -30) dir *= -1;
        heroImg.style.transform = `translateY(${pos}px)`;
        requestAnimationFrame(floatHero);
    }

    floatHero();
}

// ====== Cards Hover & Fade-in ======
cards.forEach(card => {
    // Hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'all 0.3s ease';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Fade-in on scroll with improved performance
function fadeInCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s ease';
        }
    });
}

// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(fadeInCards, 10);
});

window.addEventListener('DOMContentLoaded', fadeInCards); // Run on page load too

// ====== Button Hover Glow ======
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = '0 0 20px rgba(106,13,173,0.7)';
        btn.style.transform = 'scale(1.05)';
        btn.style.transition = 'all 0.3s ease';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = 'none';
        btn.style.transform = 'scale(1)';
    });
});