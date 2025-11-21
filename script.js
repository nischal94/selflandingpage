document.addEventListener('DOMContentLoaded', () => {
    const pageTransition = document.querySelector('.page-transition');

    // Fade in page on load
    setTimeout(() => {
        if (pageTransition) {
            pageTransition.style.opacity = '0';
        }
    }, 50);

    // Handle all internal links with transition
    const internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="about.html"], a[href^="svenklas.html"], a[href^="philosophy.html"], a[href^="media.html"], a[href^="contact.html"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            // Trigger transition
            if (pageTransition) {
                pageTransition.classList.add('active');

                // Navigate after transition starts
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            } else {
                window.location.href = href;
            }
        });
    });

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Subtle parallax effect on scroll for content sections
    const contentSections = document.querySelectorAll('.content-section');

    if (contentSections.length > 0) {
        let ticking = false;

        const updateSections = () => {
            const scrollY = window.pageYOffset;

            contentSections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const elementTop = rect.top + scrollY;
                const offset = (scrollY - elementTop) * 0.05;

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    section.style.transform = `translateY(${offset}px)`;
                    section.style.opacity = Math.max(0.3, Math.min(1, (window.innerHeight - rect.top) / 400));
                }
            });

            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateSections);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
        updateSections(); // Initial call
    }

    // Add stagger animation to links on landing page
    const documentLinks = document.querySelectorAll('.document-link');
    documentLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';

        setTimeout(() => {
            link.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 + (index * 80));
    });

    // Header fade in
    const header = document.querySelector('.document-header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 50);
    }

    // Cursor effect - subtle text highlight on hover
    const links = document.querySelectorAll('.document-link, .external-link, .back-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });

        link.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });

    // Add reading progress indicator for content pages
    if (document.querySelector('.document-content')) {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 1px;
            background: var(--underline-color);
            width: 0%;
            z-index: 9998;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        const updateProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.pageYOffset;
            const progress = (scrolled / documentHeight) * 100;

            progressBar.style.width = `${Math.min(progress, 100)}%`;
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress();
    }
});

// Preload next pages on hover
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href$=".html"]');
    const preloadedPages = new Set();

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && !preloadedPages.has(href) && !href.startsWith('http')) {
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'prefetch';
                preloadLink.href = href;
                document.head.appendChild(preloadLink);
                preloadedPages.add(href);
            }
        });
    });
});
