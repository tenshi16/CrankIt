jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    //Validador custom
    $('#myForm').submit(function () {
        let res = document.getElementById('res')
        let cpu = document.getElementById('cpu')
        let gpu = document.getElementById('gpu')
        let ram = document.getElementById('ram')
        let sRes = res.options[res.selectedIndex].text
        let sCpu = cpu.options[cpu.selectedIndex].text
        let sGpu = gpu.options[gpu.selectedIndex].text
        let sRam = ram.options[ram.selectedIndex].text
        if (sRes == 'Choose...' || sCpu == 'Choose...' || sGpu == 'Choose...' || sRam == 'Choose...') {
            document.getElementById('mensajeValidacion').style.display = 'block'
            if (sRes !== 'Choose...') {
                document.getElementById('res').classList.remove('validador')
            }
            if (sCpu !== 'Choose...') {
                document.getElementById('cpu').classList.remove('validador')
            }
            if (sGpu !== 'Choose...') {
                document.getElementById('gpu').classList.remove('validador')
            }
            if (sRam !== 'Choose...') {
                document.getElementById('ram').classList.remove('validador')
            }
            if (sRes == 'Choose...') {
                document.getElementById('res').className += ' validador'
            }
            if (sCpu == 'Choose...') {
                document.getElementById('cpu').className += ' validador'
            }
            if (sGpu == 'Choose...') {
                document.getElementById('gpu').className += ' validador'
            }
            if (sRam == 'Choose...') {
                document.getElementById('ram').className += ' validador'
            }

            return false
        }
        else {
            document.getElementById('myForm').style.display = 'none'
            return false
        }
    });
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
    // Usar de uno solo
    $('.a').slick({
        dots: true
        , infinite: true
        , speed: 300
        , slidesToShow: 4
        , slidesToScroll: 4
        , responsive: [
            {
                breakpoint: 960
                , settings: {
                    slidesToShow: 3
                    , slidesToScroll: 3
                    , infinite: true
                    , dots: true
                }
    }
            , {
                breakpoint: 720
                , settings: {
                    slidesToShow: 2
                    , slidesToScroll: 2
                }
    }
            , {
                breakpoint: 540
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                }
    }
            , {
                breakpoint: 480
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});
