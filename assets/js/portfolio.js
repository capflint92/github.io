let lastScrollTop = 0;
      
    window.addEventListener("scroll", function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
      if (currentScroll > lastScrollTop) {
        
        document.querySelector('.header').style.top = "-100px";
      } else {
        
        document.querySelector('.header').style.top = "0"; 
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    });

  let hamburger = document.querySelector('.nav-hamburger');
  hamburger.addEventListener("click", function() {
    document.body.classList.toggle('open');
  });
  function openContactForm() {
    document.getElementById("contactFormOverlay").style.display = "block";
  }
  
  function closeContactForm() {
    document.getElementById("contactFormOverlay").style.display = "none";
  }