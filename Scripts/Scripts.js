const d = new Date();
let year = d.getFullYear();
let lastModified = new Date(document.lastModified);
let newLastModified = Date.parse(document.lastModified);


let coppyWrite = `<p>&copy ${year}</p>
<p>Last modified: ${lastModified}</p>`
document.querySelector("footer").innerHTML = coppyWrite;
