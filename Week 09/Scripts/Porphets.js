
console.log("Hello")
fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then((response) => response.json())
    .then((data) => display(data));



async function get_data()
{
    let responce = await fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json');
    let data = await responce.json();
    console.log(data);
} 

function display(data)
{
    console.log(data)
}


get_data();

