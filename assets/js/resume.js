
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
  