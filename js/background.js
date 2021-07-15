const images = ["bus.jpg","petra.jpg","rio.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bdImage = document.createElement("img");

bdImage.src = `img/${chosenImage}`;
bdImage.classList.add("background");

document.body.appendChild(bdImage);