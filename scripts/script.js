const items = document.querySelectorAll(".cartegory-right-content-item")
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    window.location.href = `../pages/detail.html?id=${index+1}`
  })
})
