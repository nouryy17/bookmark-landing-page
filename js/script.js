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
let Question=document.querySelectorAll(".Questions  .boxs .box .Questions")
let img=document.querySelectorAll(".Questions  .boxs .box .Questions img")

Question.forEach(function (ele) {
    ele.addEventListener("click",function () {
       ele.parentElement.classList.toggle("activ")
    })
})