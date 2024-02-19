
anime({
    targets: '.img1',
    translateX: 50,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

anime({
    targets: ['.img2'],
    rotate: 360,
    loop: true,
    duration: 4000,
    // direction: 'alternate',
    easing: 'linear'
});

anime({
    targets: '.img5',
    keyframes: [
        { translateX: 50, scale: 1.3, rotate: 360 },
        { translateX: -50, scale: 1, rotate: 0, },
    ],
    loop: true,
    duration: 6000,
});

anime({
    targets: ['.img9', '.img11', '.img13'],
    keyframes: [
        {
            translateY: 50,
        },
        {
            translateY: 0,
        }
    ],
    duration: 3000,
    loop: true,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});


anime({
    targets: '.img12',
    keyframes: [
        {
            translateY: 50,
        },
        {
            translateX: 50,
        }
    ],
    duration: 3000,
    loop: true,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});

anime({
    targets: '.img8',
    keyframes: [
        {
            translateX: 50,
            rotate: 180
        },
        {
            translateX: 150,
            rotate: -180
        }
    ],
    duration: 3000,
    loop: true,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});


anime({
    targets: ['.img6'],
    keyframes: [
        {
            translateX: -300,
        },
        {
            translateX: 1250,
        },
        {
            translateX: 0,
        }
    ],
    duration: 4000,
    loop: true,
});

anime({
    targets: ['.img7'],
    rotate: 720,
    duration: 4000,
    loop: true,
});


anime({
    targets: ['.img3', '.img16', '.img4'],
    translateY: 30,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

anime({
    targets: '.img17',
    keyframes: [
        { translateY: -10 },
        { translateX: 30 },
        { translateY: 10 },
        { translateX: 0 },
        { translateY: 0 }
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});

anime({
    targets: '.img16',
    scale: 1.4,
    keyframes: [
        { scale: 1.4 },
        { scale: 1, }
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});

// anime({
//     targets: '.img',
//     translateY: -50,
//     direction: 'alternate',
//     loop: true,
//     easing: 'cubicBezier(.1, .05, .1, .3)'
// })