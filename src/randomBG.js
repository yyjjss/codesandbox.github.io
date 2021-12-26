const image = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const chosenImage = image[Math.floor(Math.random() * image.length)];
let imgUrl = `image/${chosenImage}`;
document.body.style.backgroundImage = "url(" + imgUrl + ")";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
