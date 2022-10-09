const d = new Date();
let year = d.getFullYear();
let lastModified = new Date(document.lastModified);
let newLastModified = Date.parse(document.lastModified);


let coppyWrite = `<p>&copy ${year}| Brennon Laney|</p>
<p>Last modified: ${lastModified}</p>`
document.querySelector("#footerContent").innerHTML = coppyWrite;

document.querySelector("#SecondHeader").innerHTML = d;



function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;