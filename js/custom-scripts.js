$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    if ($(window).width() < '992'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '992'){

        } else {

        }
    });

    /******************************
     ******* other scripts ********
     ******************************/

    $('.form-submit').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        if(document.getElementById('order-checkbox').checked) {
            document.getElementById('order-checkbox').classList.remove('invalid-field');
        } else {
            document.getElementById('order-checkbox').classList.add('invalid-field');
        }
        $(this).parents('form').find('.custom-checkbox:invalid').addClass('invalid-field');
        $(this).parents('form').find('.no-checked').removeClass('invalid-field');
    });

});