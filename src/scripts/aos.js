import AOS from 'aos/dist/aos';
class AOSAnimate {
    constructor() {
        this.offset = 200;
        this.duration = 600;
        this.delay = 100;
    }

    init() {
        AOS.init({
            offset: this.offset,
            duration: this.duration,
            easing: 'ease-in-sine',
            delay: this.delay,
        });
    }
}

export default AOSAnimate;