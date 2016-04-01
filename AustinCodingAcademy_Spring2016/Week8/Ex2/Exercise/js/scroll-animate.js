$(document).ready(function(){
    
    //sandwich flip
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 610) {
            
            $('.my_sandwich').addClass('animated flip');
            
        }
        
        console.log(verticalScroll);
        
    });
    
    //four items function
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 1070) {
            
            $('#my_1').removeClass('hide_me');
            $('#my_2').removeClass('hide_me');
            $('#my_3').removeClass('hide_me');
            $('#my_4').removeClass('hide_me');
            
            $('#my_1').addClass('animated fadeInDownBig');
            $('#my_2').addClass('animated fadeInRightBig');
            $('#my_3').addClass('animated fadeInUpBig');
            $('#my_4').addClass('animated fadeInLeftBig');
            
        }
        
        console.log(verticalScroll);
        
    });
    
});