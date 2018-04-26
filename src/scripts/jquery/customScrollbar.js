import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
class CustomScrollbar {
    constructor(selector) {
        this.selector = selector;
        this.axis = 'y';
        this.theme = 'light';
    }
    init() {
        $(this.selector).mCustomScrollbar({
            axis: this.axis,
            theme: this.theme
        });
    }
}

export default CustomScrollbar;