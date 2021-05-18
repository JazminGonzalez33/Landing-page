$(document).ready(function() {

    $('#formulario').submit(function(e) {
        let nombre = $('#ingresa-nombre').val();
        let dieta = $('#ingresa-dieta').val();

        console.log(nombre);
        console.log(dieta);
        $('#ingresa-nombre2').val(nombre);
        $('#ingresa-dieta2').val(dieta);
        $('.formMessage').show();
        $('#formulario').hide();
        $('#fotos').hide();
        e.preventDefault();
    });

    $("#close").click(function() {
        $('#formulario').show();
        $('#fotos').show();
        $('.formMessage').hide();
        $('#ingresa-nombre').val("");
        $('#ingresa-dieta').val("");
        $('#ingresa-mail').val("");
    });


});