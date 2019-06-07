var images = document.querySelectorAll(".slideshow-images");
var imageCount = images.length;
var nextImage = document.querySelector(".next");
var previousImage = document.querySelector(".previous");
var count = 0;

function displayNextImage() {
  images[count].classList.remove("active-image");

  if (count < imageCount - 1) {
    count++;
  } else {
    count = 0;
  }

  images[count].classList.add("active-image");
  console.log(count);
}

function displayPreviousImage() {
  images[count].classList.remove("active-image");

  if (count > 0) {
    count--;
  } else {
    count = imageCount - 1;
  }

  images[count].classList.add("active-image");
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    displayPreviousImage();
  } else if (e.keyCode == "39") {
    displayNextImage();
  }
}

nextImage.addEventListener("click", displayNextImage);
previousImage.addEventListener("click", displayPreviousImage);
document.addEventListener("keydown", keyPress);
