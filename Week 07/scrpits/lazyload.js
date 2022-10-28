let imagesToLoad = document.querySelectorAll("[data-src]");

function loadImages(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((items,imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    })
}, imgOptions);

imagesToLoad.forEach((image) => {
  imgObserver.observe(image);
});
