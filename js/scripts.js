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
videoPage.to("#video-shadow", {
    duration: 1,
    boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.5)',
    y: 0,
}, 1.25)
videoPage.to("#video-wrapper, #video, .credit", {
    duration: 1,
    y: 0,
    ease: Power4.inOut,
    zIndex: 3,
    stagger: 0.2,
}, 0.2)


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
    duration: 1,
    scrollTo: "#faq-top",
})
faqPage.to('#faq-page', {
    duration: 1,
    y: 0,
    ease: 'power4.inOut',
    zIndex: 2,
}, 0.0)
faqPage.to('#faq-page .faq-link-wrapper, #faq-page .link-light', {
    duration: 1,
    y: 0,
    ease: 'power4.inOut',
    stagger: 0.1
})
faqPage.to('#faq-page .line', {
    duration: 1,
    x: 0,
    y: 0,
    ease: 'power4.inOut',
    stagger: 0.1,
}, 0.5)
faqPage.to('#faq-page h2, #faq-page p', {
    duration: 1,
    y: 0,
    ease: 'power4.inOut',
    stagger: 0.1,
}, 1)


function toggleFaqOpen() {
    faqPage.play();
}

function toggleFaqClosed() {
    faqPage.reverse()
}
// /FAQ

// NFT
var player = new Vimeo.Player(document.querySelector('iframe'));

document.getElementById('play-vid').addEventListener('click', function() {
  player.play();
});
document.getElementById('close-button').addEventListener('click', function() {
  player.pause();
});
// /NFT