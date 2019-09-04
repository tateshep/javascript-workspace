

var lightboxModal = document.getElementById('myModal')
var thumbnailControlsImages = Array.from(document.getElementsByClassName("thumbnail-controls-images"));
var mySlides = Array.from(document.getElementsByClassName('mySlides'));
var openModalImg = Array.from(document.getElementsByClassName("open-modal-img"));
var closeBtn = document.querySelector('.close-btn');

var slideIndex = 1;

openModalImg.forEach(function(element, index) {
    element.firstElementChild.id = parseInt(index) + 1;
});
thumbnailControlsImages.forEach(function(element, index) {
    element.id = parseInt(index) + 1;
});

showSlides(1);
function showSlides(n) {
    // console.log(slideIndex);
    // console.log(n);
    var i;
    var dots = thumbnailControlsImages;
    var slides = mySlides;
    // console.log(slides);

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active" ;
}

function currentSlide(n) {
    openModal();
    slideIndex = n
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides (slideIndex += n);
}

function closeModal() {
    // console.log('close');
    lightboxModal.style.display="none";
}

function openModal() {
    // console.log('open');
    lightboxModal.style.display="block";
}
// console.log(mySlides);



closeBtn.addEventListener('click',closeModal);
