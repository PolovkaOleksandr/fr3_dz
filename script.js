const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            const img = e.target;
            const src = img.getAttribute('data-src');
            img.src = src;
            img.classList.remove('load');
            observer.unobserve(img);
        }
    });
}, { threshold: 1.0 });

const images = document.querySelectorAll('img[data-src]');

images.forEach((img) => {
    observer.observe(img);
});