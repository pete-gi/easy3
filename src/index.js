import './index.scss';
import 'jquery';

import Flexslider from './scripts/jquery/flexslider';
import Fancybox from './scripts/jquery/fancybox';
// import Slick from './scripts/jquery/slick';
// import MasonryGrid from './scripts/jquery/masonry';
// import AOSAnimate from './scripts/jquery/aos';

import ScrollTo from './scripts/jquery/scrollTo';
import ScrollTop from './scripts/jquery/scrollToTop';
// import Accordion from './scripts/jquery/accordion';

import vue from './scripts/vue';

$(window).on('load', function() {
    let slider = new Flexslider('.flexslider');
    slider.controls = false;
    slider.directions = false;
    // slider.speed = 4000;
    slider.init();

    let gallery = new Fancybox('[data-fancybox]');
    // gallery.thumbnails = true;
    gallery.init();

    let lightboxItem = new Fancybox('.lightbox');
    lightboxItem.init();

    // let slick = new Slick('.slick-carousel');
    // slick.responsive(575, 2);
    // slick.responsive(768, 3);
    // slick.responsive(992, 4);
    // slick.responsive(1200, 5);
    // // slick.arrows = true;
    // // slick.dots = true;
    // // slick.autoplay = false;
    // // slick.speed = 5000;
    // slick.init();

    let scrollTop = new ScrollTop('.js-scroll-top');
    // scrollTop.speed = 1000;
    // scrollTop.offsetToggle = 5;
    scrollTop.init();

    let scrollTo = new ScrollTo('.js-scroll');
    scrollTo.init();

    // let accordion = new Accordion('.accordion');
    // // accordion.resetOnToggle = true;
    // // accordion.resetOnBodyClick = true;
    // accordion.init();

    // let masonry = new MasonryGrid('.masonry');
    // // masonry.itemSelector = '.masonry';
    // masonry.init();

    // let aos = new AOSAnimate();
    // aos.offset = 200;
    // aos.duration = 200;
    // aos.delay = 200;
    // aos.init();
});