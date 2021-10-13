// LANDING PAGE
function landingPageEntranceAnim(){
    const tl = gsap.timeline({})
    tl
    .to('#home-page h1, #home-page p, #home-page .links .link, .link-wrapper', {
        duration: 2,
        y: 0,
        ease: 'power4.inOut',
        stagger: 0.1
    })
}
landingPageEntranceAnim()
// /LANDING PAGE

// VIDEO PAGE
const videoPage = gsap.timeline({
    paused: "true"
});

videoPage.to("#video-page", {
    duration: 0.75,
    y: 0,
    ease: Power4.inOut,
    zIndex: 3,
})
videoPage.to("#video-wrapper, #video, .credit", {
    duration: 0.8,
    y: 0,
    ease: Power4.inOut,
    zIndex: 3,
    stagger: 0.2,
})

function toggleVideoOpen() {
    videoPage.play();
}

function toggleVideoClosed() {
    videoPage.reverse();
}
// /VIDEO PAGE

// FAQ

const faqPage = gsap.timeline({
    paused: "true"
})
faqPage.to('#faq-page', {
    duration: 0.1,
    scrollTo: "#faq-top",
})
faqPage.to('#faq-page', {
    duration: 1,
    y: 0,
    ease: 'power4.inOut',
    zIndex: 2,
})
faqPage.to('#faq-page .line', {
    duration: 0.75,
    x: 0,
    y: 0,
    ease: 'power4.inOut',
    stagger: 0.1,
})
faqPage.to('#faq-page h2, #faq-page p', {
    duration: 0.75,
    y: 0,
    ease: 'power4.inOut',
    stagger: 0.1,
})
faqPage.to('#faq-page .link-wrapper, #faq-page .link-light', {
    duration: 0.5,
    y: 0,
    ease: 'power4.inOut',
    stagger: 0.1
})

function toggleFaqOpen() {
    faqPage.play();
}

function toggleFaqClosed() {
    faqPage.reverse()
}

// /FAQ