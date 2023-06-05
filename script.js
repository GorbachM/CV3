function ani() {

    if (document.documentElement.clientWidth > 1000) {

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            wrapper: '.wrappers',
            content: '.contents',
            smooth: 3,
            effects: true
        })
        gsap.fromTo('.about__right-side', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.about__right-side',
                start: 'center',
                end: '820',
                scrub: true
            }
        })

        gsap.fromTo('.about', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.about',
                start: 'center',
                end: 'bottom',
                scrub: true
            }
        })


//animate section Portfolio

        let namePort = gsap.utils.toArray('.name-block')

        namePort.forEach(item => {
            gsap.fromTo(item, {opacity: 0, x: 100}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-950',
                    end: '0',
                    scrub: true
                }
            })
        })


        let ed = gsap.utils.toArray('.education__block')

        ed.forEach(item => {
            gsap.fromTo(item, {y: 70, x: 0}, {
                y: 0, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })

//FOOTER  BLOCK

        let foot = gsap.utils.toArray('.footer__block-right')

        function footerBlock() {
            if (document.documentElement.clientWidth > 1200) {
                foot.forEach(item => {
                    gsap.fromTo(item, {x: 600, y: 0}, {
                        x: 50, y: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: '-850',
                            end: '-100',
                            scrub: true
                        }
                    })
                })
            } else {
                foot.forEach(item => {
                    gsap.fromTo(item, {x: 0, y: -30}, {

                        x: 0, y: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: '-850',
                            end: '-100',
                            scrub: true
                        }
                    })
                })
            }
        }
        footerBlock();


        let projectWrap = gsap.utils.toArray('.project-wrapper')

        projectWrap.forEach(item => {
            gsap.fromTo(item, {opacity: 0, x: 50}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })

//SPECIALIZED LEFT

        let itemsL = gsap.utils.toArray('.spec__left-h2')

        function left() {
            if (document.documentElement.clientWidth > 1200) {
                itemsL.forEach(item => {
                    gsap.fromTo(item, {opacity: 0, x: -50}, {
                        opacity: 1, x: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: '-850',
                            end: '-100',
                            scrub: true
                        }
                    })
                })
            } else {
                itemsL.forEach(item => {
                    gsap.fromTo(item, {opacity: 0, x: 0}, {
                        opacity: 1, x: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: '-850',
                            end: '-100',
                            scrub: true
                        }
                    })
                })
            }
        }
        left();

//SPECIALIZED RIGHT

        let specRight = document.getElementById('specRight');
        let itemsR = gsap.utils.toArray('.spec__right-h2')

        function right() {
            if (document.documentElement.clientWidth > 1200) {
                itemsR.forEach(item => {
                    gsap.fromTo(item, {opacity: 0, x: 50}, {
                        opacity: 1, x: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: '-750',
                            end: 'top',
                            scrub: true
                        }
                    })
                })
            } else {
                specRight.setAttribute('data-speed', '.98');

                itemsR.forEach(item => {
                    gsap.fromTo(item, {opacity: 0, x: 10}, {
                        opacity: 1, x: 0,
                        scrollTrigger: {
                            trigger: item,
                            start: '-750',
                            end: 'top',
                            scrub: true
                        }
                    })
                })
            }
        }
    } else {
        return false;
    }
    right();
}

ani();


// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName('spec__card');
//
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//
//     slides[slideIndex-1].style.display = "flex";
// }

function check() {
    document.getElementById('toggler').checked = false;

    }

