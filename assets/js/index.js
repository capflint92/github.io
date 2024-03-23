/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["Historian", "Developer", "Dreamer", "Videogamer"],
    loop: true,
    typeSpeed: 100,  // Adjust typing speed (characters per second)
    backSpeed: 80,   // Adjust backspace speed (characters per second)
    backDelay: 1000   // Delay in milliseconds before backspacing
  });

  let hamburger = document.querySelector('.nav-hamburger');
  hamburger.addEventListener("click", function() {
    document.body.classList.toggle('open');
  });
    
      let lastScrollTop = 0;
      
      window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
        if (currentScroll > lastScrollTop) {
          // Scorrimento verso il basso
          document.querySelector('.header').style.top = "-100px"; // Nascondi l'header
        } else {
          // Scorrimento verso l'alto
          document.querySelector('.header').style.top = "0"; // Mostra l'header
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Per gestire il caso in cui si scorre verso l'alto fino alla cima della pagina
      });

      // JavaScript per mostrare e nascondere il riquadro del form
function openContactForm() {
  document.getElementById("contactFormOverlay").style.display = "block";
}

function closeContactForm() {
  document.getElementById("contactFormOverlay").style.display = "none";
}
