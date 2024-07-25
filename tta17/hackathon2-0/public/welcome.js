document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex >= slides.length) {slideIndex = 0} 
        slides[slideIndex].style.display = "block"; 
        setTimeout(showSlides, 3000); 
    }
});
