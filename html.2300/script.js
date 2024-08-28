// สไลด์โชว์
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds}
}

// ฟังก์ชันสำหรับขยายรูปภาพ
function expandImage() {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImg");
    let img = document.getElementById("expandableImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
