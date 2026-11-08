/**
 * ============================================================================
 * HALIM SAJIDI - PROFESSIONAL PORTFOLIO INTERACTIVITY
 * script.js
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotice = document.getElementById('toastNotice');
  const backToTopBtn = document.getElementById('backToTop');

  /**
   * 1. MOBILE MENU (HAMBURGER TOGGLE)
   */
  const openMobileMenu = () => {
    navMenu.classList.add('nav-active');
    navToggle.classList.add('is-active');
    if (navBackdrop) navBackdrop.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const closeMobileMenu = () => {
    navMenu.classList.remove('nav-active');
    navToggle.classList.remove('is-active');
    if (navBackdrop) navBackdrop.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const toggleMobileMenu = () => {
    const isMenuOpen = navMenu.classList.contains('nav-active');
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav-active')) {
      closeMobileMenu();
    }
  });

  // Close mobile menu automatically if viewport resized to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('nav-active')) {
      closeMobileMenu();
    }
  });

  /**
   * 2. SMOOTH SCROLLING WITH STICKY NAVBAR OFFSET CORRECTION
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // Close mobile drawer if currently open
        closeMobileMenu();

        // Calculate offset position accounting for the sticky header height
        const navbarHeight = header ? header.offsetHeight : 72;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 2;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Update URL hash cleanly without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  /**
   * 3. ACTIVE STATE NAVIGATION ON SCROLL (SCROLLSPY)
   */
  const updateActiveNavLink = () => {
    const navbarHeight = header ? header.offsetHeight : 72;
    const scrollPosition = window.pageYOffset + navbarHeight + 80;

    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = sectionId;
      }
    });

    // Fallback: If at very bottom of document, highlight contact
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 50) {
      currentSectionId = 'contact';
    }

    // Apply or remove .active class on nav links
    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  /**
   * 4. NAVBAR SOLID BACKGROUND & BACK TO TOP BUTTON VISIBILITY
   */
  const handleScrollEffects = () => {
    const scrollY = window.pageYOffset;

    // Navbar solid on scroll
    if (header) {
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top floating button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  // Back to Top Click Action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  /**
   * 5. QUICK COPY EMAIL ACTION & TOAST NOTIFICATION
   */
  let toastTimer = null;
  if (copyEmailBtn && toastNotice) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'halimsajidi14@gmail.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback method for older browsers or insecure contexts
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Show toast notification
        toastNotice.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toastNotice.classList.remove('show');
        }, 2600);
      } catch (err) {
        console.error('Gagal menyalin email:', err);
      }
    });
  }

  // Run on scroll with passive listener for best performance
  window.addEventListener('scroll', () => {
    handleScrollEffects();
    updateActiveNavLink();
  }, { passive: true });

  // Initial execution on page load
  handleScrollEffects();
  updateActiveNavLink();
});
