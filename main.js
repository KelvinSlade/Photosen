const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});



const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');
const contents = document.querySelectorAll('.content');

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');    
}
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sliderNav(i)
        });
    });


    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName('img-slide');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if(slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex -1].style.display = 'block';
        setTimeout(showSlides, 6000);
        // change image every 5 seconds
    }
