window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #4b79a1, #283e51)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
    }
});
