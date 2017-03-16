jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    //Validador custom
    $('#myForm').submit(function () {
        //let breaks in urbe
        var res = document.getElementById('res')
        var cpu = document.getElementById('cpu')
        var gpu = document.getElementById('gpu')
        var ram = document.getElementById('ram')
        var sRes = res.options[res.selectedIndex].text
        var sCpu = cpu.options[cpu.selectedIndex].text
        var sGpu = gpu.options[gpu.selectedIndex].text
        var sRam = ram.options[ram.selectedIndex].text
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
            /* If the object is compvarely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
    // Usar de uno solo
    $('.card-deck').slick({
        dots: true
        , infinite: true
        , speed: 300
        , slidesToShow: 4
        , slidesToScroll: 4
        , responsive: [
            {
                breakpoint: 1199
                , settings: {
                    slidesToShow: 4
                    , slidesToScroll: 4
                    , infinite: true
                    , dots: true
                }
    }
            , {
                breakpoint: 991
                , settings: {
                    slidesToShow: 3
                    , slidesToScroll: 3
                }
    }
            , {
                breakpoint: 767
                , settings: {
                    slidesToShow: 2
                    , slidesToScroll: 2
                }
    }
            , {
                breakpoint: 575
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
