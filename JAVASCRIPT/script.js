// Efecto suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Animación al cargar
window.addEventListener("load", () => {
  document.body.style.opacity = 1
})

const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close menu when clicking on a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove("active")
    mobileMenu.classList.remove("active")
  }
})

const form = document.getElementById("contactForm")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("mensaje enviado")
  form.reset()
})

window.addEventListener("DOMContentLoaded", () => {
  const wa = document.getElementById("whatsapp-float")
  wa.style.display = "none" // lo oculpa

  setTimeout(() => {
    wa.style.display = "flex" // aparece despues de unos segundos
  }, 3000)
})

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-anim")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.2 },
  )

  elements.forEach((el) => observer.observe(el))

  document.body.style.opacity = "1"
})

const faqButtons = document.querySelectorAll(".faq-question")

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling

    // Cerramos todas las respuestas primero
    document.querySelectorAll(".faq-answer").forEach((a) => {
      if (a !== answer) {
        a.style.maxHeight = null
      }
    })

    // Abrimos o cerramos la respuesta clickeada
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px"
    }
  })
})
