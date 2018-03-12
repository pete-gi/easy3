import 'slick-carousel/slick/slick.min';
class Slick {
    constructor(selector) {
        this.selector = selector;
        this.arrows = false;
        this.dots = false;
        this.autoplay = true;
        this.autoplaySpeed = 5000;
        this.responsiveData = [];
    }
    responsive(width, itemCount) {
        this.responsiveData.push({
            breakpoint: width,
            settings: {
                slidesToShow: itemCount
            }
        });
    }
    init() {
        $(this.selector).slick({
            autoplay: this.autoplay,
            autoplaySpeed: this.speed,
            arrows: this.arrows,
            // prevArrow: $(''),
            // nextArrow: $(''),
            dots: this.dots,
            draggable: true,
            infinite: true,
            mobileFirst: true,
            pauseOnFocus: true,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: this.responsiveData
        });
    }
}

export default Slick;