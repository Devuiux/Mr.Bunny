$(function() {

   // $('body').scrollspy({target: '#scrollspy'});

   $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
            $('html,body').animate({
               scrollTop: target.offset().top - 95
            }, 1000);
            return false;
         }
      }
   });

   $(".navbar-nav li a").click(function() {
      $(".navbar-nav li").removeClass('active');
      $(this).parent().addClass('active');
      return false;
   });

   //Hamburger menu toggle
   $(".navbar-nav li a").click(function(event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
         $(".navbar-collapse").collapse('hide');
      }
   });

   $(window).scroll(function() {

      var wScroll = $(this).scrollTop();

      $('.logo').css({
         'transform': 'translate(0px, ' + wScroll / 9 + '%)'
      });
      $('.bunny').css({
         'transform': 'translate(0px, ' + wScroll / 12 + '%)'
      });

   });



});
