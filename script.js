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

      
      // scroll to top button config
      document.addEventListener("DOMContentLoaded", function () {
      const scrollBtn = document.getElementById("scrollToTopBtn");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          scrollBtn.classList.add("show");
        } else {
          scrollBtn.classList.remove("show");
        }
      });

      scrollBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
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


// Modal overlay

document.getElementById("myForm").addEventListener("submit", async function (e) {
  e.preventDefault(); 

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // This will show modal overlay 
      document.getElementById("success-modal").style.display = "flex";
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
});

// This will close the modal overlay when background is clicked
document.querySelector("#success-modal .background").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("success-modal").style.display = "none";
});










