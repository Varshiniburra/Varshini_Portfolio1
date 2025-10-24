// ---------- Typed.js for hero text ----------
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: ["Java Full Stack Developer"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1300,
    loop: true,
    showCursor: true
  });

  // ---------- AOS init ----------
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out"
    });
  }

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- GSAP animations ----------
  if (window.gsap) {
    try {
      gsap.to(".blob-1", { y: -20, x: 10, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".blob-2", { y: 30, x: -20, duration: 7.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".blob-3", { y: -18, x: 12, duration: 8.1, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.from(".card-preview", { y: 18, rotation: -1.5, duration: 1.4, ease: "power2.out" });
    } catch(e) { console.warn(e); }
  }
});

// ---------- Open project links in new tab ----------
function openInNew(ev, url) {
  ev.preventDefault();
  if (url && url !== "#") window.open(url, "_blank", "noopener");
}

// ---------- Contact form ----------
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  // Demo behaviour (replace with real backend/email API)
  alert(`Thanks ${name}! (Demo) Message sent.`);
  document.getElementById("contactForm").reset();
}

// ---------- Theme toggle ----------
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeToggle.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    themeToggle.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});
