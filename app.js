$(document).ready(function(){
    $('#validePrenom').hide()
    $('#valideNom').hide()
    $('#valideEmail').hide()
    $('#valideMessage').hide()

    // $('.navbar a , footer a').on("click", function(event){
    //     event.preventDefault();
    //     var hash = this.hash;

    //     $('body, html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
    // })

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

