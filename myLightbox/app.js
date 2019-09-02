

var lightboxModal = document.getElementById('myModal')
var closeBtn = document.querySelector('.close-btn');
var myImages = Array.from(document.getElementsByClassName('my-images'));

function closeModal() {
    console.log('close');
    lightboxModal.style.display="none";
}

function openModal() {
    console.log('open');
    lightboxModal.style.display="block";
}
console.log(myImages);

myImages.forEach(element => {
    element.addEventListener('click',openModal);
});

closeBtn.addEventListener('click',closeModal);
