$('.portfolio-items').isotope({
    filter: '*',
    animationOptions: {
        duration: 7500,
        easing: 'linear'
    },
    packery: {
        columnWidth: '.portfolio-items img'
    }
});

$(document).ready(function() {
    $('.portfolio-items').isotope('layout');
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});