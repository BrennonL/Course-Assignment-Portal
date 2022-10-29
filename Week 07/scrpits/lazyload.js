let imagesToLoad = document.querySelectorAll("img[data-src]")


function loadImage(img)
{
    let src = img.getAttribute("data-src")
    if (!src)
    {
        return;
    }
    else
    {
        img.setAttribute("src", src);
        img.onload = () => {img.removeAttribute("data-src");};
    }    
}


const imgVariables = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const imgObserver = new IntersectionObserver((items, imgObserver) =>
{
    items.forEach(item => {
        if(!item.isIntersecting)
        {
            return;
        }
        else
        {
            loadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, imgOptions);

imagesToLoad.forEach(img => {
    imgObserver.observe(img);
});


