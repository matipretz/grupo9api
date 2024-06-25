const arribaBtn = document.getElementById('arriba')

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleButtonVisibility = () => {
  arribaBtn.style.display = window.scrollY > 50 ? 'block' : 'none'
}

arribaBtn.addEventListener('click', scrollToTop)
window.addEventListener('scroll', toggleButtonVisibility)
