const hello = document.querySelector('input[value="NP"]')
const test1 = document.querySelector('input[value="bronze"]')
const test2 = document.querySelector('input[value="silver"]')
const test3 = document.querySelector('input[value="gold"]')

hello.addEventListener("click", doThis)
test1.addEventListener("click", doThis1)
test2.addEventListener("click", doThis2)
test3.addEventListener("click", doThis3)

function doThis()
{
  document.querySelector('#displayinfo').innerHTML = `<p>Price: None</p>
  <p>Benefits: None</p>`;
}

function doThis1()
{
  document.querySelector('#displayinfo').innerHTML = `<p>Price: $10 a year</p>
  <p>Benefits:</p>
  <ul>
    <li>5% off advertising</li>
  </ul>`;
}

function doThis2()
{
  document.querySelector('#displayinfo').innerHTML = `<p>Price: $50 a year</p>
  <p>Benefits:</p>
  <ul>
    <li>15% discount on building rentals</li>
    <li>10% off of advertising</li>
  </ul>`;
}

function doThis3()
{
  document.querySelector('#displayinfo').innerHTML = `<p>Price: $100 a year</p>
  <p>Benefits:</p>
  <ul>
    <li>30% discount on building rentals</li>
    <li>Free advertising on webpage</li> 
  </ul>`;
}


var date = new Date();

// Get today's date
var day = date.getDate();
var month = date.getMonth() + 1; // The months are 0-based
var this_year = date.getFullYear();
var hour = date.getHours();
var min = date.getMinutes();

// Set the date field to the current date
document.getElementById("date").value = day + "/" + month + "/" + this_year + " " + hour + ":" + min;