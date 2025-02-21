const menuIcon = document.querySelector('.menu-icon');
const fullscreenNav = document.querySelector('.fullscreen-nav');
const navLinks = document.querySelectorAll('.nav-links a');

let isMenuOpen = false;

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  menuIcon.classList.toggle('menu-open');

  if (isMenuOpen) {
    // Show menu
    fullscreenNav.style.display = 'flex';
    
    gsap.to(fullscreenNav, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut'
    });

    // Animate links
    gsap.to(navLinks, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.2
    });
  } else {
    // Hide menu
    gsap.to(navLinks, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.in'
    });

    gsap.to(fullscreenNav, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        fullscreenNav.style.display = 'none';
      }
    });
  }
} 