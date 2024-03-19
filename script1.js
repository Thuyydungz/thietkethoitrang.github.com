const baoquan = documnet.querySelector(".baoquan")
const chitiet = documnet.querySelector(".chitiet")
if(baoquan) {
    baoquan.addEventListener("click",function(){
        documnet.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        documnet.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}

if(chitiet) {
    chitiet.addEventListener("click",function(){
        documnet.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        documnet.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}