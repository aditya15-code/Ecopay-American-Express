

    
     var typed = new Typed('.text', {

           strings: ["<strong> Welcome to  </strong> <strong class='primary'>  ECOPAY.</strong>", "<strong> Best </strong> <strong class='primary'> PAYMENT</strong> <strong> Option </strong>",],

           typeSpeed: 50,
           loop:0,

        });

      $(window).scroll(function()
      {
          
          var top=$(window).scrollTop();
          if(top>=60){
                $("nav").addClass('secondary');
            }
            else 
                if($("nav").hasClass('secondary')){
                    $("nav").removeClass('secondary');
            }
      });
          $('.work').magnificPopup({
               delegate: 'a', // child items selector, by clicking on it popup will open
               type: 'image',
                gallery: {
              enabled: true
              }
      // other options
         });
         
            $("#team-members").owlCarousel({
                items:3,
                autoplay:true,
                smartspeed:700,
                loop:true,
                autoplayHoverPause:true,
               
                

                 } );

            $('.counter').counterUp({
             delay: 10,
             time: 5000
        });

            $('a.smooth-scroll').smoothScroll();
    

  

     



     
