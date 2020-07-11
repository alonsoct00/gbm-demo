


$(document).ready(function(){
  $('#portfolio-slider').slick({
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
    console.log(getval);
    $(this).find('.entry-img > img').attr('alt', getval);
});

    $(".dropdown").hover(function() {
        $(this).toggleClass('open');
        $(this).find('.dropdown-menu').fadeToggle(500);
        $(this).find('.dropdown-menu').toggleClass('show');
        $(this).find('.dropdown-toggle').toggleAttrVal('aria-expanded', "true", "false");
    });

