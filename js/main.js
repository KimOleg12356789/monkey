$(document).ready(function(){

    $(".option").click(function(){
       $(".option").removeClass("active");
       $(this).addClass("active");
       
    });

    // const burger = document.querySelector('.burger');
    // const navbar = document.querySelector('.mt-mobile');
    // const body = document.querySelector('body');

    // burger.addEventListener('click', () => {
    //     navbar.classList.toggle('nav-open');
    //     body.classList.toggle('body-open');
    //     burger.classList.toggle('burger-open');
        
    // });

    

    // (window).scroll(function() {
    //         if ($(this).scrollTop() > 1800){
    //           $('.mt-mobile').addClass("sticky");
    //           }
    //           else{
    //           $('.mt-mobile').removeClass("sticky");
    //         }
    //   });

    //   $(window).scroll(function() {
    //         if ($(this).scrollTop() > 1800){
    //           $('.burger').addClass("sticky");
    //           }
    //           else{
    //           $('.burger').removeClass("sticky");
    //         }
    //   });
    


         


    // if(window.innerWidth < 768) {
    //   (window).scroll(function() {
    //         if ($(this).scrollTop() > 2080){
    //           $('.mt-mobile').addClass("sticky");
    //           }
    //           else{
    //           $('.mt-mobile').removeClass("sticky");
    //         }
    //   });

    //   $(window).scroll(function() {
    //         if ($(this).scrollTop() > 2080){
    //           $('.burger').addClass("sticky");
    //           }
    //           else{
    //           $('.burger').removeClass("sticky");
    //         }
    //   });
    // }     





    // $( ".nav-menu li a" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
    //   $( ".mt-mobile" ).css( "display", "none" ); // вызываем событие click на элементе <div>
    // });    
    // $( ".burger " ).click(function(){ // задаем функцию при нажатиии на элемент <div>
    //       $( ".mt-mobile" ).css( "display", "block" ); // отображаем, или скрываем элемент
    // });


 


    // $('.mt-mobile').click(
    //   function(){
    //     // при вхождении в элемент
    //     $(this).css('clip-path','circle(0px at 100% 0px)');
    //   },
    //   function(){
    //     // при покидании элемента
    //     $(this).css('clip-path:','circle(100%)');
    //   }
    // );
     


    $('.team').slick({
        infinite: true,
        dots:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            dots:false,
            slidesToScroll: 1,
            autoplay: true
    
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            dots:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            dots:false,
            slidesToScroll: 1
          }
        }
        ]
    });

   

    setTimeout(function() {
       document.getElementById('logo').style.opacity = '1';
    }, 8800);

     setTimeout(function() {
       document.getElementById('twitter').style.opacity = '1';
    }, 8800);

     setTimeout(function() {
       document.getElementById('discord').style.opacity = '1';
    }, 8800);

    setTimeout(function() {
       document.getElementById('slogan').style.opacity = '1';
    }, 8800);

    setTimeout(function() {
       document.getElementById('scroll').style.opacity = '1';
    }, 8800);

    setTimeout(function() {
       document.getElementById('body').style.overflow = 'inherit';
    }, 8800);

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#menu2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#menu3").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });



    $(function() {
      $('.marquee').marquee({
        duration: 5000,
        direction: 'left',
        startVisible: true,
        duplicated: true
      });
    });


     $(window).scroll(function () {
      /*если прокрутка больше 300 показ. кнопку*/
              if ($(this).scrollTop() > 1600) {
                  $('.gototop, .alert').fadeIn();
      /*если нет то скрываем кнопку*/
              } else {
                  $('.gototop, .alert').fadeOut();
              }
          });
      /*при клике по кнопке переходим вверх стр.*/
          $('.gototop').click(function () {
              $('body,html').animate({
                  scrollTop: 850
              }, 1800);
              return false;
      });

      $('.resize').height($(window).height());
        
      $(window).resize(function() {
        $('.resize').height($(window).height());
      })
    
     
});


document.getElementById("options-wrap")
  .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });


window.onload = function () {
        var scr = $(".options-wrap");
        scr.mousedown(function () {
            var startX = this.scrollLeft + event.pageX;
            var startY = this.scrollTop + event.pageY;
            scr.mousemove(function () {
                this.scrollLeft = startX - event.pageX;
                this.scrollTop = startY - event.pageY;
                return false;
            });
        });
        $(window).mouseup(function () {
            scr.off("mousemove"); 
        });
    }