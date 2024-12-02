// JavaScript for Gallery
document.addEventListener("DOMContentLoaded", () => {
    const thumbnailGallery = document.querySelector(".thumbnail-gallery");
    const imageViewer = document.getElementById("imageViewer");
    const enlargedImage = document.getElementById("enlargedImage");
    const closeBtn = document.getElementById("closeBtn");

    // Placeholder images array
    const images = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg"
    ];

    // Create thumbnails dynamically
    images.forEach((src, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add("thumbnail");
        thumbnail.addEventListener("click", () => {
            enlargedImage.src = src;
            imageViewer.style.display = "flex";
        });
        thumbnailGallery.appendChild(thumbnail);
    });

    // Close image viewer
    closeBtn.addEventListener("click", () => {
        imageViewer.style.display = "none";
        enlargedImage.src = "";
    });

    // Close viewer on background click
    imageViewer.addEventListener("click", (e) => {
        if (e.target === imageViewer) {
            imageViewer.style.display = "none";
            enlargedImage.src = "";
        }
    });
});
