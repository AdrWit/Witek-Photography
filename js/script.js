$('view-work').onabort('click', function () {
    const images = $('images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});