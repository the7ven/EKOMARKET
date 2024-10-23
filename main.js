document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const indicatorsContainer = document.getElementById('indicators');
    let currentIndex = 0;
    let interval;

    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function startCarousel() {
        interval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(interval);
        startCarousel();
    }

    indicatorsContainer.addEventListener('click', resetInterval);
    startCarousel();
});




  // Configuration de base de ScrollReveal
  ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 200
});

// Animations pour le header
ScrollReveal().reveal('.head', { 
    delay: 300,
    origin: 'top'
});

// Animations pour la section hero
ScrollReveal().reveal('.hero-content', { 
    delay: 400,
    origin: 'left',
    distance: '100px'
});

// Animations pour la section help
ScrollReveal().reveal('.help-icons', { 
    delay: 200,
    origin: 'bottom',
    interval: 200
});

// Animations pour les catégories
ScrollReveal().reveal('.category .title', { 
    delay: 200,
    origin: 'left'
});
ScrollReveal().reveal('.categories > div', { 
    delay: 300,
    origin: 'bottom',
    interval: 200
});

// Animations pour les produits hebdomadaires
ScrollReveal().reveal('.weekly .title', {
    origin: 'left'
});
ScrollReveal().reveal('.weekly-product1', {
    delay: 400,
    origin: 'bottom',
    interval: 300
});

// Animations pour les deals du jour
ScrollReveal().reveal('.day .title', {
    origin: 'left'
});
ScrollReveal().reveal('.day-deal1', {
    delay: 400,
    origin: 'bottom',
    interval: 300
});

// Animations pour les produits en vedette
ScrollReveal().reveal('.featured .title', {
    origin: 'left'
});
ScrollReveal().reveal('.products', {
    delay: 200,
    origin: 'bottom',
    interval: 200
});

// Animations pour la bannière
ScrollReveal().reveal('.banner-text', {
    delay: 300,
    origin: 'right',
    distance: '100px'
});

// Animations pour les marques
ScrollReveal().reveal('.marques img', {
    delay: 200,
    origin: 'bottom',
    interval: 150
});

// Animations pour les témoignages
ScrollReveal().reveal('.section-header', {
    origin: 'top'
});
ScrollReveal().reveal('.testimonial-card', {
    delay: 300,
    origin: 'left',
    interval: 200
});

// Animations pour le footer
ScrollReveal().reveal('.main-footer', {
    delay: 200,
    origin: 'bottom'
});
ScrollReveal().reveal('.services', {
    delay: 400,
    origin: 'bottom'
});