$(() => {
    var fixed = $('header')
    var menuHeight = $('header').outerHeight()

    console.log(menuHeight);

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > menuHeight) {
            fixed.addClass("menu-fixed").fadeIn("slow")
            $('.joyjet-fixed').addClass("middle-xs")
        } else {
            fixed.removeClass("menu-fixed")
            $('.joyjet-fixed').removeClass("middle-xs ")
        }

    })
})