document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('a[href^="#"]');
  const contents = document.querySelectorAll('.content');
  const loading = document.getElementById('loading');

  // loading
  window.addEventListener('load', function () {
    setTimeout(function () {
      loading.classList.add('hidden');
    }, 2000);
  });

  // menu pada headbar ketika layar kecil
  burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  // animasi konten
  contents.forEach((content, index) => {
    if (index % 2 === 0) {
      content.classList.add('from-left');
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  contents.forEach(content => {
    observer.observe(content);
  });

  // smooth scroll
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // menampilkan map
  const map = L.map('map').setView([-6.973270698296368, 107.63278915763728], 24);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([-6.973270698296368, 107.63278915763728]).addTo(map)
    .bindPopup('Robotic SAS')
    .openPopup();
});
