// Array of image URLs
const photos = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5"
];

// Function to get a random image from the array
function getRandomImage() {
  const index = Math.floor(Math.random() * photos.length);
  return photos[index];
}

// Set images on page load
window.onload = function () {
  document.getElementById("randomPhoto1").src = getRandomImage();
  document.getElementById("randomPhoto2").src = getRandomImage();
  document.getElementById("randomPhoto3").src = getRandomImage();
};
