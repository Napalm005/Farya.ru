(function($) {
    $(function() {

        $('#top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        })
    })
})(jQuery)

$(function() {

    $('a[href=#price]').click(function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#price').offset().top
        }, 700);
        e.preventDefault();
    });
});

