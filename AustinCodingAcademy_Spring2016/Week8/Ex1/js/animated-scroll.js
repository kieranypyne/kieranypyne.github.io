$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 100) {

            $('#pokeball').addClass('animated bounceIn');
        }

    });
    
    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 890) {

            $('#Jelly').addClass('animated jello');
        }
        console.log(verticalScroll);

    });
});