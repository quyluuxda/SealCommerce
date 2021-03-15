(function () {
    var $;
    $ = this.jQuery || window.jQuery;
    win = $(window), body = $('body'), doc = $(document);

    var popup = $('.popup');
    // Nếu click button "Open popup" thì mở popup
    $('.open-popup').click(function (e) {
        body.addClass('body-overlay');
        popup.addClass('popup-show');
    });

    // Nếu click button "x" thì đóng popup
    $('.close-popup').click(function (e) {
        popup.removeClass('popup-show');
        body.removeClass('body-overlay');
    });

    // Nếu click bên ngoài đối tượng popup thì ẩn nó đi
    doc.mouseup(function (e) {
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            popup.removeClass('popup-show');
            body.removeClass('body-overlay');
        }
    });

}).call(this);