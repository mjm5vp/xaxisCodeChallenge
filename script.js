// Div variables
var imageContainer = document.querySelector('.imageContainer')
var legalBox = document.querySelector('.legal')
var legalText = document.querySelector('.legalText')
var topText1 = document.querySelector('.topText1')
var bottomText1 = document.querySelector('.bottomText1')
var topText2 = document.querySelector('.topText2')
var bottomText2 = document.querySelector('.bottomText2')
var learnMoreButton = document.querySelector('.learnMoreButton')
var learnMoreButtonHover = document.querySelector('.learnMoreButtonHover')

//Entire ad fade in
setTimeout(function(){
  imageContainer.classList.add("anim")
}, 100)

//Text 1
setTimeout(function(){
    topText1.classList.add("anim")
}, 1000)

setTimeout(function(){
    bottomText1.classList.add("anim")
}, 2000)

setTimeout(function(){
    topText1.style.opacity = "0"
    bottomText1.style.opacity = "0"
}, 5000)

//Text 2
setTimeout(function(){
    topText2.classList.add("anim")
}, 6000)

setTimeout(function(){
    bottomText2.classList.add("anim")
}, 7000)

//Legal and Learn More appear and event listeners
setTimeout(function(){
    //Legal Box
    legalBox.classList.add("anim")

    legalBox.addEventListener('mouseover', function(){
      legalText.classList.add("anim")
      legalBox.classList.remove("anim")
    })

    legalText.addEventListener('mouseout', function(){
      legalText.classList.remove("anim")
      legalBox.classList.add("anim")
    })

    //Learn More Button
    learnMoreButton.classList.add("anim")

    imageContainer.addEventListener('mouseover', function(){
      learnMoreButton.classList.add("switch")
      learnMoreButtonHover.classList.add("switch")
    })

    imageContainer.addEventListener('mouseout', function(){
      learnMoreButton.classList.remove("switch")
      learnMoreButtonHover.classList.remove("switch")
    })
}, 10000)
