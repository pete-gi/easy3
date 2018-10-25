import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
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