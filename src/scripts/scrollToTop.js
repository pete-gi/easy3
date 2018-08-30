class ScrollTop {
    constructor(selector) {
        this.selector = selector;
        this.offsetToggle = window.innerHeight / 2;
        this.speed = 500;
    }
    init() {
        $(this.selector).addClass('is-hidden');
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.offsetToggle) {
                $(this.selector).removeClass('is-hidden');
            } else {
                $(this.selector).addClass('is-hidden');
            }
        })
        $(this.selector).on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, this.speed);
        });
    }
}

export default ScrollTop;