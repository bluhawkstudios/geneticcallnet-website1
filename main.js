// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Contact form submit
function handleFormSubmit(btn) {
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    const msg = document.getElementById('form-success');
    if (msg) msg.style.display = 'block';
  }, 1200);
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.why-card, .service-card, .svc-full-card, .adv-card, .case-card, .leader-card, .industry-card, .brand-tile, .number-card, .mv-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// About dropdown toggle
const aboutDropdown = document.getElementById('about-dropdown');
if (aboutDropdown) {
  let hoverTimer;

  aboutDropdown.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimer);
    aboutDropdown.classList.add('open');
  });

  aboutDropdown.addEventListener('mouseleave', () => {
    hoverTimer = setTimeout(() => {
      aboutDropdown.classList.remove('open');
    }, 150);
  });

  // Keep mobile click support
  const toggle = aboutDropdown.querySelector('.dropdown-toggle');
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 640) {
      e.stopPropagation();
      aboutDropdown.classList.toggle('open');
    }
  });

  document.addEventListener('click', (e) => {
    if (!aboutDropdown.contains(e.target)) {
      aboutDropdown.classList.remove('open');
    }
  });
}
