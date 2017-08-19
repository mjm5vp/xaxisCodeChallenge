
var firstTexts = ["Insurance For", "so yours is"]
var secondTexts = ["PEACE OF MIND", "FREE TO DREAM."]


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
