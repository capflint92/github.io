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
  function sendEmail() {
    // Ottieni i valori dal modulo
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Invia il modulo utilizzando EmailJS
    emailjs.send("service_mr1092", "template_w322g1t", {
        from_name: name,
        from_email: email,
        message_html: message
    }).then(function (response) {
        console.log("Email inviata con successo", response);
        alert("Grazie per averci contattato! Riceverai presto una risposta.");
        document.getElementById("contact-form").reset(); 
    }, function (error) {
        console.log("Errore nell'invio dell'email", error);
        alert("Si è verificato un errore nell'invio dell'email. Riprova più tardi.");
    });