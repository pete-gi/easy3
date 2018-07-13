import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
class CustomScrollbar {
    constructor(selector) {
        this.selector = selector;
        this.axis = 'y';
        this.theme = 'light';
        this.step = 150;
    }
    init() {
        $(this.selector).mCustomScrollbar({
            axis: this.axis,
            theme: this.theme,
			scrollInertia: (this.step * 3),
            mouseWheel: {
                scrollAmount: this.step
            }
        });
    }
}

export default CustomScrollbar;