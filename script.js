
var firstTexts = ["Insurance For", "so yours is"]
var secondTexts = ["PEACE OF MIND", "FREE TO DREAM."]



var legalBox = document.querySelector('.legal')


legalBox.addEventListener('mouseover', function(){
  legalBox.innerHTML = "American Family Mutual Insurance Company, S.I., American Family Insurance Company, 6000 AmericanParkway, Madison WI 53783 | &copy; 2017 013362 - 4/17"
  legalBox.style.padding = "5%"
  legalBox.style.fontSize = "8px"
})

legalBox.addEventListener('mouseout', function(){
  legalBox.innerHTML = "Legal"
  legalBox.style.padding = "2%"
  legalBox.style.fontSize = "15px"
})


setTimeout(function(){
  changeText('firstText', firstTexts[0])
  changeText('secondText', secondTexts[0])
},2000)

setTimeout(function(){
  changeText('firstText', firstTexts[1])
  changeText('secondText', secondTexts[1])
},4000)






function changeText(id, text){
  document.getElementById(id).innerHTML = text
}
