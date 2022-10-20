const slides = document.querySelectorAll(".slide")

document.addEventListener("click", event => {
  const node = event.target
  if(node.classList.contains("slide") && !node.classList.contains("active")){
    slides.forEach((slide) =>slide.classList.remove("active"))
    node.classList.add("active")
  }
})