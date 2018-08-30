class ScrollTo {
    constructor(selector) {
        this.selector = selector;
        this.speed = 500;
    }
    init() {
        $(this.selector).on('click', function(e) {
            e.preventDefault();
            let href = $(this).attr('href') ? $(this).attr('href') : $(this).attr('data-href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, this.speed);
        });
    }
}

export default ScrollTo;