function upDate(previewPic) {
    // Log to verify function call
    console.log("Hovering over: ", previewPic.alt);
    
    // Change background image and text in the div with id="image"
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Update background
    imageDiv.innerHTML = previewPic.alt; // Update text to alt attribute of image
}

function undo() {
    // Reset background image and text in the div with id="image"
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')"; // Reset background
    imageDiv.innerHTML = "Hover over an image below to display here."; // Reset text
}
