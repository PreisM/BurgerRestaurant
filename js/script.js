$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change')
    })
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })

    $('.nav-item a, .header-link, #back-to-top').click(function(link) {
        link.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).stop().offset().top - 25
        }, 2500);
    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $('#back-to-top').addClass('scrollTop');
        } else {
            $('#back-to-top').removeClass('scrollTop');
        }
    })

    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
