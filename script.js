      const toggleBtn = document.getElementById('menu-toggle');
      const drawer = document.getElementById('mobile-drawer');
      const closeBtn = document.getElementById('menu-close');
    
      function openDrawer() {
        drawer.classList.add('open');
      }
    
      function closeDrawer() {
        // Add a one-time listener to wait for the transform transition to finish
        drawer.addEventListener('transitionend', function handler(e) {
          if (e.propertyName === 'transform') {
            drawer.style.pointerEvents = 'none';
            drawer.style.opacity = '0';
            drawer.removeEventListener('transitionend', handler);
          }
        });
    
        drawer.classList.remove('open');
      }
    
      toggleBtn.addEventListener('click', () => {
        // Reset interaction styles before opening
        drawer.style.pointerEvents = 'auto';
        drawer.style.opacity = '1';
        openDrawer();
      });
    
      closeBtn.addEventListener('click', closeDrawer);
    
      // Close drawer when clicking any nav link
      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });









document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        if (target.classList.contains("testimonial-card")) {
          // Moderate stagger: 300ms between cards
          setTimeout(() => {
            target.classList.add("animate-visible");
          }, index * 300);
        } else {
          target.classList.add("animate-visible");
        }

        observer.unobserve(target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-hidden").forEach((el) => {
    observer.observe(el);
  });
});





