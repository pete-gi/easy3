import 'jquery';
class Accordion {
    constructor(selector) {
        this.selector = selector;
        this.$el = $(this.selector);
        this.$btn = $(this.selector + ' > button');
        this.$content = $(this.selector + ' > .accordion-content');
        this.$content.slideUp();
        this.resetOnToggle = false;
        this.resetOnBodyClick = false;
    }
    init() {
        let self = this;
        this.$btn.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (self.resetOnToggle) {
                self.$content.slideUp();
                $(this).next().slideToggle();
            } else {
                $(this).next().slideToggle();
            }
        })
        if (self.resetOnBodyClick) {
            $('html, body').on('click', function(e) {
                e.preventDefault();
                self.$content.slideUp();
            });
        }
        if (location.hash && $(location.hash)) {
            $(function() {
                $(location.hash + ' > .accordion-content').slideDown();
                $('html, body').animate({
                    scrollTop: $(location.hash).offset().top
                }, 500);
            });
        }
    }
}

export default Accordion;