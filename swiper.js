import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';


// init swiper
const swiper = new Swiper('.swiper', {
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

    // autoplay: {
    //     delay: 2500,
    // },


  
});