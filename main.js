let currentIndex = 0;
const slides = document.querySelectorAll(".image-container")

function showSlides() {
   slides[currentIndex].style.display = "none";
   currentIndex = (currentIndex + 1 ) % slides.length;
   slides[currentIndex].style.display = "block";
}

setInterval(showSlides , 4000)

const navlinks = document.getElementById("navlinks");
const menu = document.getElementById("menu");

menu.addEventListener('click' , ()=>{
    navlinks.classList.toggle("navlinks-active")
})

const menutoggle = document.getElementById("menu")
const navLinks = document.getElementById("navlinks") 

menutoggle.addEventListener('click' , () => {
    navLinks.classList.toggle("show")
})