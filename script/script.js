$(document).ready(function() {
    $('.btn-filter').click(function() {
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');
    });

    $('.product .price-box').click(function() {
        const price = $(this).find('.price').text();
        alert('Цена этого продукта: ' + price + ' руб.');
    });

    $('.send-btn').click(function() {
        const email = $('.email-box input').val().trim();
        if(email) {
            alert('Спасибо! Мы получили вашу почту: ' + email);
            $('.email-box input').val('');
        } else {
            alert('Введите вашу электронную почту.');
        }
    });
});