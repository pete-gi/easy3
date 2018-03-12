window.addEventListener('DOMContentLoaded', function() {
    let preloader = document.getElementById('page-preloader');
    let removePreloader = setTimeout(function() {
        preloader.classList.remove('is-active');
        removePreloader.clearTimeout();
    }, 100);
});