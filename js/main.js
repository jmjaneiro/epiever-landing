document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .program-card, .step, .testimonial-card, .timeline-item, .stat-card').forEach(el => {
        el.classList.add('reveal-text');
        observer.observe(el);
    });

    // Special observer for Zen comparison to trigger staggered animations
    const zenWrapper = document.querySelector('.zen-comparison-wrapper');
    if (zenWrapper) observer.observe(zenWrapper);

    // Animate network nodes in the spiral
    const nodes = document.querySelectorAll('#spiral-group circle');
    nodes.forEach((node, i) => {
        node.style.transition = 'all 2s ease-in-out';
        setInterval(() => {
            const xShift = (Math.random() - 0.5) * 5;
            const yShift = (Math.random() - 0.5) * 5;
            node.style.transform = `translate(${xShift}px, ${yShift}px)`;
        }, 2000 + (i * 200));
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Scroll indicator fade out
    window.addEventListener('scroll', () => {
        const indicator = document.querySelector('.scroll-indicator');
        if (indicator) {
            if (window.scrollY > 100) {
                indicator.style.opacity = '0';
            } else {
                indicator.style.opacity = '1';
            }
        }
    });

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
});
