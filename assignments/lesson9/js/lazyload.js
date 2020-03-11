const imagesToLoad = document.querySelectorAll("[data-src]");

function preloadImage(img){ 
    const src = img.getAttribute("data-src");
    if (!src) { return; }
    img.src = src;
}

function removeImg(img){
    img.removeAttribute("data-src");
}

const imgOptions = {
    rootMargin: "0px 0px 0px 0px" 
};

const imgObserver = new IntersectionObserver((entries, ImgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            ImgObserver.unobserve(entry.target);
            removeImg(entry.target);
        }
    });
}, imgOptions);

imagesToLoad.forEach(image => {
    imgObserver.observe(image);
})
