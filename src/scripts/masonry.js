import Masonry from 'masonry-layout/dist/masonry.pkgd.min';
class MasonryGrid {
    constructor(selector) {
        this.selector = selector;
        this.itemSelector = '.grid-item';
    }

    init() {
        let elem = document.querySelector(this.selector);
        new Masonry(elem, {
            itemSelector: this.itemSelector,
            percentPosition: true
        });
    }
}

export default MasonryGrid;