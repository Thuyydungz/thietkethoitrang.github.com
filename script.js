const imgItem = documnet.querySelectorAll(".aspect-ratio-169 img")
const imgItemContainer = document.querySelector(".aspect-ratio-169")
const dotItem = documnet.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0
imgItem.forEach(function(image,index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        sliderRun(index)
    })
})
function islider(){
    index++;
    if (index>=imgNuber) {index=0}
    sliderRun (index)

}
function sliderRun (index){
    imgItemContainer.style.left= "-" +index*100+ "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,5000)


const itemsliderbar = documnet.querySelectorAl(".cartegory-left-li")
itemsliderbar.forEach(function(menu, index){
    menu.addEventListener.toggle("click",function(){
        menu.classList.toggle("block")
    })
})