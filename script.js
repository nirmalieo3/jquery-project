$(function() { 
    
    $('#hamburger-container').on('click', function() {

    $('#sideMenu').toggle('slide', { direction: 'right'}, 1000)
    });
  var immagini = './img/back.jpg'
   /* $('#style').each(function(i, el) {
    $(el).parallax({imageSrc: listaImmagini})
   });*/
    $('#style').paralax({imageSrc: immagini});

   $(window).on('scroll', function() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition > 700) {
          console.log('maggiore di 700')
        $('#tornaSu').fadeIn();
        } else {
            $('#tornaSu').fadeOut();
        }
    })
   
    $('#tornaSu').on('click', function() {
     $('html, body').animate({scrollTop: 0}, 5500)
    })

     $('header ul li a').on('click', function(event) {
      event.preventDefault();
     $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1500)
     $('#sideMenu').toggle('slide', { direction: 'right'}, 1000)
    })

    $(document).ready(function(e){
    $('.fancybox').fancybox({autoPlay:true, playSpeed:2000});
     })
  })

 
