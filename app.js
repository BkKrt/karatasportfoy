

let search = document.querySelector("#search")
let myform = document.querySelector(".search-form")
let menubar = document.querySelector("#menu-bar")
let mymenubar = document.querySelector(".navbar")




search.onclick = () => {
    myform.classList.toggle('active')
    mymenubar.classList.remove('active')
    
}

menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mymenubar.classList.toggle('active')
    myform.classList.remove('active')

}


document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".mySwiper", {
        // Carousel ayarları
        slidesPerView: 1, // Her seferinde görüntülenen slayt sayısı
        spaceBetween: 30, // Slaytlar arasındaki boşluk
        loop: true, // Sonsuz döngü
        navigation: {
            nextEl: '.swiper-button-next', // Sonraki düğme sınıfı
            prevEl: '.swiper-button-prev', // Önceki düğme sınıfı
        },
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var fullscreenElements = document.querySelectorAll('.inner-featred');

    fullscreenElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            if (!event.target.closest('.feature-image')) {
                // Eğer tıklanan öğe .feature-image sınıfına ait değilse, tam ekran modunu kapatma
                this.classList.remove("fullscreen");
            }
        });

        var images = element.querySelectorAll('.feature-image img');
        images.forEach(function(image) {
            image.addEventListener('click', function() {
                // Tıklanan resmin üst öğesinin tam ekran modunu açma
                this.closest('.inner-featred').classList.add("fullscreen");
            });
        });
    });

    // Çarpı simgesine tıklandığında tam ekran modunu kapatma
    var closeButtons = document.querySelectorAll('.inner-featred .close-btn');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.closest('.inner-featred').classList.remove("fullscreen");
        });
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 7000); 




