

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



let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideInterval = 3000; // 1 saniye = 1000 milisaniye

function showSlide(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Tüm slaytları gizle
    }
    slides[slideIndex].style.display = "block";  // Aktif slaytı göster
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function autoSlide() {
    showSlide(slideIndex += 1);
}

// Slider'ı başlat
showSlide(slideIndex);

// Her 1 saniyede bir otomatik geçiş
setInterval(autoSlide, slideInterval);



