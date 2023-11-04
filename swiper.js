import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

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
    modules: [Navigation],

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

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    direction: 'horizontal',
    loop: true,

});
