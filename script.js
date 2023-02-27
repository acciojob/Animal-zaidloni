//your JS code here. If required.
window.addEventListener("load", function() {
    const images = document.querySelectorAll(".photo-container img");
    let loadedImages = 0;
    
    images.forEach(function(image) {
      image.addEventListener("load", function() {
        loadedImages++;
        
        if (loadedImages === images.length) {
          document.querySelector(".photo-container").style.visibility = "visible";
        }
      });
    });
  });