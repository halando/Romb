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
    doc.calcButton.addEventListener('click', () => {
        startCalc()
    })
}
function startCalc(){
    console.log("működik")
  state.perimeter =  calcPerimeter(doc.aside.value)
  state.area =  calcPerimeter(doc.aside.value,doc.alpha.value)
  doc.perimeter.value = state.perimeter;
  doc.area = state.area;
}
 
function calcPerimeter(aside){
    return 0;
}
function calcArea(aside,alpha){
    return 0;
}