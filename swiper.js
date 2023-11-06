import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';


// init swiper
const heroSwiper = new Swiper('.hero-swiper', {
    modules: [Navigation, Autoplay],

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
 
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 2500,
    },

});

const classicSwiper = new Swiper('.classic-swiper', {
    modules: [Navigation, Autoplay],

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },

    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 1000,
    },

});


const recSwiper = new Swiper('.rec-swiper', {
    modules: [Navigation, Autoplay],
    
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 40,
        },
    },

    direction: 'horizontal',
    loop: true,

});

const similarSwiper = new Swiper('.similar-swiper', {
    modules: [Navigation, Autoplay],

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 40,
        },
    },

    direction: 'horizontal',
    loop: true,

});

const seasonSwiper = new Swiper('.seasons-swiper', {
    modules: [Navigation, Autoplay],

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },

    direction: 'horizontal',
    loop: true,

});




