// Text
var firstTexts = ["Insurance For", "so yours is"]
var secondTexts = ["PEACE OF MIND", "FREE TO DREAM."]
var legalText = "American Family Mutual Insurance Company, S.I., American Family Insurance Company, 6000 AmericanParkway, Madison WI 53783 | &copy; 2017 013362 - 4/17"

// Div variables
var legalBox = document.querySelector('.legal')
var firstTextDiv = document.querySelector('.firstText')
var secondTextDiv = document.querySelector('.secondText')

// mouseover event
legalBox.addEventListener('mouseover', function(){
  legalBox.innerHTML = legalText
  legalBox.style.padding = "5%"
  legalBox.style.fontSize = "8px"
})

// mouseout event
legalBox.addEventListener('mouseout', function(){
  legalBox.innerHTML = "Legal"
  legalBox.style.padding = "2%"
  legalBox.style.fontSize = "15px"
})


setTimeout(function(){
  changeText('.firstText', firstTexts[0])
  changeText('.secondText', secondTexts[0])
},2000)

setTimeout(function(){
    firstTextDiv.style.opacity = "1"
}, 3000)

setTimeout(function(){
    secondTextDiv.style.opacity = "1"
}, 3500)

setTimeout(function(){
    firstTextDiv.style.opacity = "0"
}, 5000)

setTimeout(function(){
    secondTextDiv.style.opacity = "0"
}, 5000)

setTimeout(function(){
    firstTextDiv.style.opacity = "1"
}, 6000)

setTimeout(function(){
    secondTextDiv.style.opacity = "1"
}, 6500)


setTimeout(function(){
  changeText('.firstText', firstTexts[1])
  changeText('.secondText', secondTexts[1])
}, 6000)



function changeText(className, text){
  document.querySelector(className).innerHTML = text
}
