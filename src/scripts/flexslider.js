import 'flexslider/jquery.flexslider-min';
class Flexslider {
    constructor(selector) {
        this.selector = selector;
        this.controls = false;
        this.directions = false;
        this.speed = 4000;
    }
    init() {
        $(this.selector).flexslider({
            animation: "fade",
            slideshow: true,
            slideshowSpeed: this.speed,
            animationDuration: 500,
            prevText: '',
            nextText: '',
            controlNav: this.controls,
            directionNav: this.directions
        });
    }
}

export default Flexslider;