$(document).ready(function(){
    
    //sandwich flip
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 650) {
            
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