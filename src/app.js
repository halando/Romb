//Kötések
const doc = {
    aside: document.querySelector('#aside'),
    alpha: document.querySelector('#alpha'),
    perimeter:document.querySelector('#perimeter'),
    area: document.querySelector('#area'),
    calcButton:document.querySelector('#calcButton')
}
// Az alkalmazás állapotai
const state = {
    perimeter: 0,
    area:0
}

window.addEventListener('load',() => {
    init()
})

function init(){
    if(doc.calcButton){
        doc.calcButton.addEventListener('click', () => {
            startCalc()
        })
  
    }
}
function startCalc(){
    console.log("működik")

  state.perimeter =  calcPerimeter(doc.aside.value)
  state.area =  calcArea(doc.aside.value,doc.alpha.value)
  doc.perimeter.value = state.perimeter;
  doc.area.value = state.area;
}
 
function checkInput(input){
    let minta = /^[0-9]+$/;
    let inputStr = String(input)
    if(inputStr.match(minta)){
        return true;
    }else{
        return false;
    }
}
function calcPerimeter(aside){
    return aside*4;
}
function calcArea(aside,alpha){
    let rad = alpha *Math.PI /180;
    let area =Math.pow(aside,2) * Math.sin(rad);
    return area;
}