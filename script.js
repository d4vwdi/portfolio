// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio carregado com sucesso!');
  });
  
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
  
    document.querySelectorAll(".accent-text").forEach(el => {
      el.style.backgroundPosition = `${x}% ${y}%`;
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio carregado com sucesso!');
  });
  
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
  
    document.querySelectorAll(".accent-text").forEach(el => {
      el.style.backgroundPosition = `${x}% ${y}%`;
    });
  });
  

  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });
  
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  

  
  