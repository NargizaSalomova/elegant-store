
import 'swiper/css/bundle';


// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();


import topInfo from './modules/top-info.js';
topInfo();

import swiper from './modules/swiper.js';
swiper();

import timer from './modules/timer.js';
timer();
