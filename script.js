TweenMax.from("nav", 2,{
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
})

TweenMax.from(".delivery", 2,{
    delay: .5,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
})

TweenMax.from(".description", 2,{
    delay: .7,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("form h2, .group-1, .group-2, .submit", 2,{
    delay: 1,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
},0.1)

TweenMax.from(".img-content", 2,{
    delay: .7,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
})

TweenMax.from("footer span", 2,{
    delay: 1.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("footer div, .facebook, .github, .linkedin, .twitter", 2,{
    delay: 1.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
},0.2)

TweenMax.from(".shape-1", 2,{
    delay: .2,
    x: -40,
    scale: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".shape-2", 2,{
    delay: .7,
    y: 40,
    x: 40,
    opacity: 0,
    scale: .5,
    ease: Expo.easeInOut
})