console.log("its work")

$(document).ready(function(){
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