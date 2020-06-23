$(document).ready(function(){

      // attach a callback function to window scroll event
    window.onscroll = function () {
        toggleNavClassOnScroll();
    };
    let navbar = document.querySelector("#navbar")
    let navLink = document.querySelectorAll(".nav-link")

    function toggleNavClassOnScroll() {
    // apply a style class based on the current state of the scrolling
    if (window.pageYOffset > 0) {
      navbar.classList.remove("navbar-light");
      navbar.classList.add("bg-light");
      for(i=0 ; i < navLink.length ; i++){
        navLink[i].classList.remove("text-light")
        navLink[i].classList.add("text-dark")
      }
      

    } else {
      navbar.classList.remove("navbar-light");
      navbar.classList.remove("bg-light");
      for(i=0 ; i < navLink.length ; i++){
        navLink[i].classList.remove("text-dark")
        navLink[i].classList.add("text-light")
      }
      
      
      
    //   navbar.classList.add("navbar-light");
    }
  }

    $('#validePrenom').hide()
    $('#valideNom').hide()
    $('#valideEmail').hide()
    $('#valideMessage').hide()

    $('#submitt').click(function(event){
        

        
        var prenom = $('#form_prenom').val()
        var nom = $('#form_nom').val()
        var email = $('#form_email').val()
        var message = $('#form_message').val()

        if(prenom.length < 1){
            $('#validePrenom').show()
        }

        if(nom.length < 1){
            event.preventDefault()
            $('#valideNom').show()
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            $('#valideEmail').hide()
        }else{
            event.preventDefault()
            $('#valideEmail').show()
        }

        if(message.length <= 10){
            event.preventDefault()
            $('#valideMessage').show()
        }

    })
})



