$(document).ready(function(){
    
    //sandwich flip
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 666) {
            
            $('.goodnight').addClass('darkgoodnight');
            
        }
        
        console.log(verticalScroll);
        
    });
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 133) {
            
            $('.cloudthing').addClass('animated fadeIn');
            
        }
        
    });
    
});