let currentSlide = 1;
showSlide(currentSlide);

function clickDot(dotNumber) {
    showSlide(dotNumber)
}

function showSlide(slideIndex) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "#BBBBBB";
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "#717171"; 
    console.log(dots[slideIndex - 1])
}
