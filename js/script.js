
// JavaScript for Tamás Zsolnai's Website

document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0,0,0,0.8)';
            navbar.style.padding = '1rem 3rem';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '1.5rem 3rem';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Reveal Elements on Scroll
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Add specific animation logic if needed
                if (entry.target.id === 'dance') {
                    // Activate neon effect
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Split Screen Interaction Logic (Mobile fix)
    const leftSplit = document.querySelector('.split.left');
    const rightSplit = document.querySelector('.split.right');

    if (window.innerWidth > 768) {
        leftSplit.addEventListener('mouseenter', () => {
            leftSplit.style.width = '70%';
            rightSplit.style.width = '30%';
        });

        rightSplit.addEventListener('mouseenter', () => {
            rightSplit.style.width = '70%';
            leftSplit.style.width = '30%';
        });

        document.getElementById('hero').addEventListener('mouseleave', () => {
            leftSplit.style.width = '50%';
            rightSplit.style.width = '50%';
        });
    }

    // 3. New Scroll Reveal for Poems/Text
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

});
