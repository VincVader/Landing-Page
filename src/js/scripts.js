'use strict';

const accordion = document.querySelector('.faq-accordion');
const burger = document.querySelector('.btn-burger');
const header = document.querySelector('.section-header');
const mainNavTop = document.querySelector('#main-navigation');

accordion.addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item')
            .classList.toggle('faq-accordion__item__active');
    }
});

burger.addEventListener('click', () => {
    header.classList.toggle('section-header__active-nav');

    if (header.classList.contains('section-header__active-nav')) {
        hideScroll();
    } else {
        showScroll();
    }
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    mainNavTop.style.paddingRight = scrollWidth;
    document.body.style.overflow= 'hidden';
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    mainNavTop.style.paddingRight = '';
    document.body.style.overflow= 'visible';
};

const resetNav = () => {
    header.classList.remove('section-header__active-nav');
    showScroll();
};

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
};

/* eslint-disable */

new Swiper('.section-hero-image', {
    loop: true,
    pagination: {
        el: '.section-hero-image .dots',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.slider-blog-container', {
    loop: true,
    pagination: {
        el: '.section-blog .dots',
        clickable: true,
    },
    navigation: {
        nextEl: '.section-blog .swiper-button-next',
        prevEl: '.section-blog .swiper-button-prev',
    },
});
new Swiper('.slider-quotes-container', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
        el: '.section-quotes .dots',
        clickable: true,
    }
});
