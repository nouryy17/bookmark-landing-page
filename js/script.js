let svg =document.querySelectorAll("header nav .svg svg")
let div =document.querySelector("header nav .div-List")
console.log(div)
console.log(svg)
function toggleActivClass(clickEle) {
    let svgActiv=document.querySelectorAll("header nav .svg svg.activ")
    svgActiv.forEach((ele) =>{
        ele.classList.remove("activ")
        div.classList.toggle("activ")
    })
    clickEle.classList.add("activ")
}