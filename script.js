function menuClick(menuItem){
    alert(`You Clicked on ${menuItem}`)
}

const banner = document.querySelector('.banner');
const images = [
    'URL("image1.jpg")',
    'URL("image2.jpg")',
    'URL("image3.jpg")'
];
let index = 0;

function changeBannerImage() {
    banner.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
}

setInterval(changeBannerImage, 3000);
changeBannerImage();
