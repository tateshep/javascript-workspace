

var lightboxModal = document.getElementById('myModal')
var closeBtn = document.querySelector('.close-btn');
var mySlides = Array.from(document.getElementsByClassName('mySlides'));
var openModalImg = Array.from(document.getElementsByClassName("open-modal-img"));

var slideIndex = 1;

openModalImg.forEach(function(element, index) {
    element.firstElementChild.id = parseInt(index) + 1;
    // element.addEventListener('click',currentSlide);
});

showSlides(1);
function showSlides(n) {
    console.log(slideIndex);
    var i;
    var dots = Array.from(document.getElementsByClassName("my-images"));
    var slides = mySlides;
    // console.log(slides);

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].clsssName = dots[i].className.replace("active","");
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
