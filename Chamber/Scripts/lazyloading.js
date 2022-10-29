let imagesToLoad = document.querySelectorAll("[data-src]");

function loadImages(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    // img.src = src;
    img.setAttribute("src", src);
    img.onload = () => {    img.removeAttribute("data-src");  };
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
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



// const imagesToLoad = document.querySelectorAll("img[data-src]");
// console.log(imagesToLoad);


// const imgOptions = 
// {
//     rootMargin: '0px 0px 50px 0px',
//     threshold: 1 //.5
// }

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => 
//     {
//         image.removeAttribute('data-src')
//     };
// };


// const imgObserver = new IntersectionObserver((items, imgObserver) => 
// {
//     items.forEach(item => 
//     {
//         if (item.isIntersecting) 
//         {
//             loadImages(item.target);
//             imgObserver.unobserve(item.target);
//         }
//         else
//         {
//             return;
//         }
//     });
// }, imgOptions);








// const imagesUpdates = document.querySelectorAll("[data-src]");

// function preloadImage(img){
//     const src = img.getAttribute("data-src");
//     if(!src){
//         return;
//     }
//     img.onload = () => {
//         img.removeAttribute("data-src");
//     }
//     img.src = src;
// }

// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px 10px 0px"
// };

// const imgShowing = new IntersectionObserver((entries,imgShowing) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         }
//         else{
//             preloadImage(entry.targe);
//             imgShowing.unobserve(entry.target);
//         }
//     })
// }, imgOptions);

// imagesUpdates.forEach((image) => {
//     imgShowing.observe(image);
// });