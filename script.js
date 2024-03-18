const items = document.querySelectorAll(".cartegory-right-content-item")
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    window.location.href = `./detail.html?id=${index+1}`
  })
})
