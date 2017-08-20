
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



setTimeout(function(){
    // topText1.style.left = "0px"
    // topText1.style.opacity = "1"
    topText1.classList.add("anim")
}, 1000)

setTimeout(function(){
    // bottomText1.style.left = "0px"
    // bottomText1.style.opacity = "1"
    bottomText1.classList.add("anim")
}, 1500)

setTimeout(function(){
    topText1.style.opacity = "0"
    bottomText1.style.opacity = "0"

    // firstTextDiv.style.left = "-100%"
    // secondTextDiv.style.left = "-100%"
}, 3000)

// setTimeout(function(){
//   changeText('.firstText', firstTexts[1])
//   changeText('.secondText', secondTexts[1])
// }, 6000)


setTimeout(function(){
    // topText2.style.opacity = "1"
    // topText2.style.left = "0px"
    topText2.classList.add("anim")
}, 4000)

setTimeout(function(){
    // bottomText2.style.opacity = "1"
    // bottomText2.style.left = "0px"
    bottomText2.classList.add("anim")
}, 4500)






setTimeout(function(){
    // legalBox.style.opacity = ".5"
    legalBox.classList.add("anim")

    // mouseover event
    legalBox.addEventListener('mouseover', function(){
      // legalBox.style.opacity = "0"
      // legalText.style.top = "0%"
      legalText.classList.add("anim")
      legalBox.classList.remove("anim")

    })

    // mouseout event
    legalText.addEventListener('mouseout', function(){
      // legalBox.style.opacity = ".5"
      // legalText.style.top = "-10%"
      legalText.classList.remove("anim")
      legalBox.classList.add("anim")
    })
}, 6000)

setTimeout(function(){
    // learnMoreButton.style.opacity = "1"
    // learnMoreButton.style.right = "5%"
    learnMoreButton.classList.add("anim")

    imageContainer.addEventListener('mouseover', function(){
      // learnMoreButton.style.opacity = "0"
      // learnMoreButtonHover.style.opacity = "1"
      learnMoreButton.classList.add("switch")
      learnMoreButtonHover.classList.add("switch")
    })

    imageContainer.addEventListener('mouseout', function(){
      // learnMoreButton.style.opacity = "1"
      // learnMoreButtonHover.style.opacity = "0"
      learnMoreButton.classList.remove("switch")
      learnMoreButtonHover.classList.remove("switch")
    })
}, 6000)



function changeText(className, text){
  document.querySelector(className).innerHTML = text
}
