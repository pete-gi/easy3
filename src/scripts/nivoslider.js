import 'nivo-slider/jquery.nivo.slider.pack';
import 'nivo-slider/nivo-slider.css';
class Nivoslider {
    constructor(selector) {
        this.selector = selector;
        this.controls = false;
        this.directions = false;
        this.speed = 500;
        this.pause = 4000;
    }
    init() {
        $(this.selector).nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: this.speed,
            pauseTime: this.pause,
            startSlide: 0,
            directionNav: this.directions,
            controlNav: this.controls,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: false,
            prevText: 'Prev',
            nextText: 'Next',
            randomStart: false,
            beforeChange: function () {},
            afterChange: function () {},
            slideshowEnd: function () {},
            lastSlide: function () {},
            afterLoad: function () {}
        });
    }
}

export default Nivoslider;