// Ini Javascript


function validateForm() {
    const usernameInput = document.getElementById('username-input').value;
    console.log(usernameInput);

    const emailInput = document.getElementById('email-input').value;
    console.log(emailInput);

    const destinasi = document.getElementById('destinasi').value;
    console.log(destinasi);

    if (usernameInput == '') {
        alert('Form username mohon diisi');
    } else if (emailInput == '') {
        alert('Form email mohon diisi');
    } else if (destinasi == '') {
        alert('Form destinasi mohon diisi');
    } else
    {
        alert ('Sukses mengirim form');
    }
}

let indexSlide = 1;
const listImages = document.getElementsByClassName('banner-autoslide');

showSlide();

function nextSlide() {
    showSlide(indexSlide += 1);
}

function showSlide(index) {
    if(index > listImages.length) indexSlide = 1;
    console.log(indexSlide);
    hideAllSlide();
    listImages[indexSlide - 1].style.display = 'block';
}

// logic untuk menyembunyikan semua slide
function hideAllSlide() {
    for (let i = 0; i < listImages.length; i++) {
        listImages[i].style.display = 'none';
    }
}

// Otoomatisasinya
setInterval(() => nextSlide(), 2000);