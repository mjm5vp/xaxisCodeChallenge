// Text
var firstTexts = ["Insurance For", "so yours is"]
var secondTexts = ["PEACE OF MIND", "FREE TO DREAM."]

// Div variables
var legalBox = document.querySelector('.legal')
var legalText = document.querySelector('.legalText')
var topText1 = document.querySelector('.topText1')
var bottomText1 = document.querySelector('.bottomText1')
var topText2 = document.querySelector('.topText2')
var bottomText2 = document.querySelector('.bottomText2')
var learnMoreButton = document.querySelector('.learnMoreButton')

// mouseover event
legalBox.addEventListener('mouseover', function(){
  legalBox.style.opacity = "0"
  legalText.style.top = "0%"
})

// mouseout event
legalText.addEventListener('mouseout', function(){
  console.log("legal out")
  legalBox.style.opacity = ".5"
  legalText.style.top = "-10%"
})


// setTimeout(function(){
//   changeText('.firstText', firstTexts[0])
//   changeText('.secondText', secondTexts[0])
// },2000)

setTimeout(function(){
    topText1.style.left = "0px"
    topText1.style.opacity = "1"
}, 3000)

setTimeout(function(){
    bottomText1.style.left = "0px"
    bottomText1.style.opacity = "1"
}, 3500)

setTimeout(function(){
    topText1.style.opacity = "0"
    bottomText1.style.opacity = "0"

    // firstTextDiv.style.left = "-100%"
    // secondTextDiv.style.left = "-100%"
}, 5000)

// setTimeout(function(){
//   changeText('.firstText', firstTexts[1])
//   changeText('.secondText', secondTexts[1])
// }, 6000)


setTimeout(function(){
    topText2.style.opacity = "1"
    topText2.style.left = "0px"
}, 6000)

setTimeout(function(){
    bottomText2.style.opacity = "1"
    bottomText2.style.left = "0px"
}, 6500)






setTimeout(function(){
    legalBox.style.opacity = ".5"
}, 8000)

setTimeout(function(){
    learnMoreButton.style.opacity = "1"
    learnMoreButton.style.right = "5%"
}, 8000)



function changeText(className, text){
  document.querySelector(className).innerHTML = text
}
