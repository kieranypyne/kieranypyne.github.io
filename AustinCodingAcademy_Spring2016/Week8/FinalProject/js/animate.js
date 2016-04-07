$(document).ready(function(){
    
    //world pulse 
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 1330) {
            
            $('.world_img').addClass('animated pulse');
            
        }
        
        console.log(verticalScroll);
        
    });
    
    //Contact Pulse
    
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 2400) {
            
            $('.ContactUs').addClass('animated pulse');
            
        }
        
    });
    
});