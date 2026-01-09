document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    // Button click handlers (replaces inline onclick)
    const barberDemoBtns = document.querySelectorAll('.barber-demo-trigger');
    const businessAppBtns = document.querySelectorAll('.business-app-trigger');

    barberDemoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open("https://alisbarber-dev.netlify.app/", "_blank");
        });
    });

    businessAppBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open("https://boka-business.netlify.app/", "_blank");
        });
    });

    // Add subtle ripple effect to buttons
    const allButtons = document.querySelectorAll('.cta-button');
    allButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Smooth page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.4s ease';
        document.body.style.opacity = '1';
    }, 50);
});


