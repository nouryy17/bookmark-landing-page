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
let imgFeatures=document.querySelector('.Features .tow .info .img img')
let pFeatures=document.querySelector('.Features .tow .info .text p')
let hFeatures=document.querySelector('.Features .tow .info .text h1')

function changeContent(num) {
    switch (num) {
        case 1:
            imgFeatures.src="img/illustration-features-tab-1.svg"
            hFeatures.innerHTML=" Bookmark in one click"
            pFeatures.innerHTML="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. "
            break;
    
        case 2:
            imgFeatures.src="img/illustration-features-tab-2.svg"
            hFeatures.innerHTML="Info Intelligent search "
            pFeatures.innerHTML=" Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. "
            
            break;
        case 3:
            imgFeatures.src="img/illustration-features-tab-3.svg"
            hFeatures.innerHTML=" Share your bookmarks"
            pFeatures.innerHTML=" Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button"
            
            break;
    }
}