class NavScroll {
    constructor(selector) {
        this.selector = selector;
        this.element = document.querySelector(this.selector);
        this.classToggle = 'nav-inverted';
        this.offset = window.innerHeight;
        this.scrollOn = true;
    }
    init() {
        this.element.classList.add('nav-to-invert');
        window.addEventListener('scroll', (e) => {
            if (this.scrollOn) {
                this.scrollOn = false;
                requestAnimationFrame(() => {
                    if (window.scrollY > this.offset) {
                        this.element.classList.add(this.classToggle);
                    } else {
                        this.element.classList.remove(this.classToggle);
                    }
                    this.scrollOn = true;
                });
            } else {
                return;
            }
        });
    }
}
export default NavScroll;