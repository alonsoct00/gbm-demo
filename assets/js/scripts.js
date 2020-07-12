$(document).ready(function() {

    var progressSlider = $('#portfolio-slider');
    beforeEnd = 1200;
    sliderTimer = 2000;
    paging = $('.pagingSlide');

    progressSlider.slick({
        fade: true,
        dots: false,
        speed: sliderTimer,
        autoplay: true,
        prevArrow: '.prev-slide',
        nextArrow: '.next-slide',
        pauseOnFocus: false,
        pauseOnHover: false
    });

    function progressBar() {
        $('.slider-progress').find('span').removeAttr('style');
        $('.slider-progress').find('span').removeClass('active');
        setTimeout(function() {
            $('.slider-progress').find('span').css('transition-duration', (sliderTimer / 560) + 's').addClass('active');
        }, 500);
    }
    progressBar();

    progressSlider.on('beforeChange', function(e, slick) {
        progressBar();

    });

    progressSlider.on('beforeChange', function(e, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        paging.text("0" + i + ' - ' + "0" + slick.slideCount);
    });
});

AOS.init();

$(window).scroll(function() {
    if ($(document).scrollTop() >= 400) {
        $('.navbar').addClass('fixed-top');
        $('.navbar').css('top', '0px');
        AOS.init();
    } else {
        $('.navbar').removeClass('fixed-top');
        $('.navbar').css('top', '0px');
    }
});

$(function() {
    $(".dropdown").hover(function() {
        $(this).toggleClass('open');
        $(this).find('.dropdown-menu').fadeToggle(500);
        $(this).find('.dropdown-menu').toggleClass('show');
        $(this).find('.dropdown-toggle').toggleAttrVal('aria-expanded', "true", "false");
    });

    var urlAndroid = "https://play.google.com/store/apps/details?id=com.mex.gbmmobile.containerhomebroker"
    urlApple = "https://itunes.apple.com/mx/app/gbmhomebroker/id421575835?mt=8"

    $('a.apple-app').each(function() {
        $(this).attr('href', urlApple)
    });

    $('a.android-app').each(function() {
        $(this).attr('href', urlAndroid)
    });

});


$('#open-comp-table').on('click', function () {
	$('#fee-categories-section').find('#comparaison-table').fadeIn();

	$('.close-modal').on('click', function () {
		$('#comparaison-table').fadeOut();
	});
});

$.fn.toggleAttrVal = function(attr, val1, val2) {
    var attrv = $(this).attr(attr);
    if (attrv === val1) {
        $(this).attr(attr, val2);
        return this;
    }
    if (attrv === val2) {
        $(this).attr(attr, val1);
        return this;
    }
    $(this).attr(attr, val1);
    return this;
};


var getval = "";
$('.blog-post').each(function() {
    getval = $(this).children('h2').text();
    $(this).find('.entry-img > img').attr('alt', getval);
});


