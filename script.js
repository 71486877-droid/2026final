// script.js - Mínimo y funcional

// Navbar efecto al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Búsqueda
const searchBtn = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            window.open(`https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`, '_blank');
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value;
            if (searchTerm) {
                window.open(`https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`, '_blank');
            }
        }
    });
}

console.log('✅ TechFuture cargado');