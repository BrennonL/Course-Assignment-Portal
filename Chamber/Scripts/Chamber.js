const d = new Date();
let year = d.getFullYear();
let lastModified = new Date(document.lastModified);
let newLastModified = Date.parse(document.lastModified);
let dayOfWeek = d.getDay()


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


if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday"){
    let eventparagraph = document.querySelector('#event');
    let thirdheader = document.querySelector('#ThirdHeader');
    eventparagraph.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
    thirdheader.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
}


const visitsDisplay = document.querySelector("#timesvisited");


let numVisits = Number(localStorage.getItem('visits-ls'));


if (numVisits !== 0) 
{
    visitsDisplay.textContent = `number of visist: ${numVisits}`;
}

else 
{
    visitsDisplay.textContent = `This is your first visit`;
}

numVisits ++;

localStorage.setItem('visits-ls', numVisits);