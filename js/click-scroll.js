// jquery-click-scroll
// by syamsul'isul' Arifin, adjusted for mixed page and section links.

$(document).ready(function(){
    var sectionLinks = $('.click-scroll').filter(function(){
        var href = $(this).attr('href');
        return href && href.charAt(0) === '#' && $(href).length;
    });

    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');

    sectionLinks.each(function(){
        var link = $(this);
        var target = $(link.attr('href'));

        link.click(function(e){
            e.preventDefault();
            $('html, body').animate({
                'scrollTop': target.offset().top - 90
            }, 300);
        });
    });

    $(document).scroll(function(){
        sectionLinks.each(function(){
            var link = $(this);
            var target = $(link.attr('href'));
            var offsetSection = target.offset().top - 90;
            var docScroll = $(document).scrollTop() + 1;

            if (docScroll >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                link.addClass('active').removeClass('inactive');
            }
        });
    });

    var activePage = window.location.pathname.split('/').pop() || 'index.html';
    var pageLink = $('.navbar-nav .nav-item .nav-link[href="' + activePage + '"]').first();

    if (pageLink.length) {
        pageLink.addClass('active').removeClass('inactive');
    } else {
        $('.navbar-nav .nav-item .nav-link').first().addClass('active').removeClass('inactive');
    }
});
