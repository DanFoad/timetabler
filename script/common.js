$(document).ready(function() {
    $(".menutoggle__container").click(function() {
        $(".header__menutoggle", this).toggleClass("open");
        $(".sidebar").toggleClass("open");
        
        if ($(".header__menutoggle", this).hasClass("open")) {
            $(".menutoggle__text", this).fadeOut(100, function() {$(this).text("Collapse")}).fadeIn(100);
        } else {
            $(".menutoggle__text", this).fadeOut(100, function() {$(this).text("Expand")}).fadeIn(100);
        }
    });
});