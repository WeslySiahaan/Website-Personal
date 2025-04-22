// Particles.js initialization
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#e00404",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#e00404",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const header = document.querySelector("header");
const mobileToggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectsGrid = document.querySelector(".projects-grid");

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Animasi saat scroll
  const sectionTop = document.querySelector("#projects").offsetTop - 300;

  if (window.scrollY >= sectionTop) {
    projectsGrid.classList.add("animated");
  }
});

// Mobile navigation
mobileToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Project filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100);
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
      }
    });
  });
});

// Animasi saat load
window.addEventListener("load", () => {
  if (
    window.scrollY >=
    document.querySelector("#projects").offsetTop - 300
  ) {
    projectsGrid.classList.add("animated");
  }

  // Set default filter to 'all'
  filterBtns[0].click();
});

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi untuk setiap carousel di modal
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const carouselId = carousel.getAttribute("id");
    const indicator = carousel.querySelector(".carousel-indicator");
    const items = carousel.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    // Fungsi untuk memperbarui indikator
    const updateIndicator = () => {
      const activeItem = carousel.querySelector(".carousel-item.active");
      const activeIndex = Array.from(items).indexOf(activeItem) + 1;
      indicator.textContent = `Gambar ${activeIndex} dari ${totalItems}`;
    };

    // Perbarui indikator saat pertama kali dimuat
    updateIndicator();

    // Dengarkan event slide dari Bootstrap
    carousel.addEventListener("slid.bs.carousel", updateIndicator);
  });
});

// Particles.js initialization
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#e00404",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#e00404",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const certificatesGrid = document.querySelector(".certificates-grid");
const viewCertificates = document.querySelectorAll(".view-certificate");
const modal = document.getElementById("certificateModal");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modalTitle");
const modalIssuer = document.getElementById("modalIssuer");
const modalDate = document.getElementById("modalDate");
const modalCredential = document.getElementById("modalCredential");
const modalLink = document.getElementById("modalLink");

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile navigation
mobileToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Animasi saat scroll
window.addEventListener("scroll", () => {
  const sectionTop =
    document.querySelector("#certificates").offsetTop - 300;

  if (window.scrollY >= sectionTop) {
    certificatesGrid.classList.add("animated");
  }
});

// Animasi saat load
window.addEventListener("load", () => {
  if (
    window.scrollY >=
    document.querySelector("#certificates").offsetTop - 300
  ) {
    certificatesGrid.classList.add("animated");
  }
});

// Handle certificate view
viewCertificates.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const certificate = e.target.closest(".view-certificate");

    // Isi data ke modal
    modalTitle.textContent = certificate.getAttribute("data-title");
    modalIssuer.textContent = certificate.getAttribute("data-issuer");
    modalDate.textContent = certificate.getAttribute("data-date");
    modalCredential.textContent =
      certificate.getAttribute("data-credential");
    modalLink.href = certificate.getAttribute("href"); // Ambil URL dari href tombol "View Certificate"

    // Tampilkan modal
    modal.style.display = "flex";
  });
});

// Tutup modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Tambahkan event listener langsung ke tombol "Download Certificate" di modal
modalLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (modalLink.href !== "#") {
    window.open(modalLink.href, "_blank"); // Buka link di tab baru
  }
});