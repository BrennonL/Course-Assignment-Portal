    
// async function get_data()
// {
    //     let responce = await fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json');
    //     let data = await responce.json();
    //     console.log(data);
    //     return await data
    // } 
    
console.log("Hello")
fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then((response) => response.json())
    .then((data) => display(data));
    // .then((data) => DisplayProphets(data));
    
    
function display(data)
{
    console.log(data)
    for(element of data.prophets) 
    {
        console.log(element.lastname);
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let paragraph = document.createElement('div');

        let prophet_name
        if(element.order == 1)
        {
            prophet_name = `${element.name} ${element.lastname} - 1st Latter-Day President`;
            h2.textContent = prophet_name
        }

        else if (element.order == 2)
        {
            prophet_name = `${element.name} ${element.lastname} - 2nd Latter-Day President`;
            h2.textContent = prophet_name
        }

        else if (element.order == 3)
        {
            prophet_name = `${element.name} ${element.lastname} - 3rd Latter-Day President`;
            h2.textContent = prophet_name
        }

        else
        {
            prophet_name = `${element.name} ${element.lastname} - ${element.order}th Latter-Day President`;
            h2.textContent = prophet_name
        }

        paragraph.innerHTML =`
        <p>Birth date: ${element.birthdate}</p>
        <p>Birth Place: ${element.birthplace}</p>` 
        
        
        portrait.setAttribute('src', element.imageurl);
        portrait.setAttribute('alt', 'Portait of' + prophet_name);
        portrait.setAttribute('loading', 'lazy');
        
        card.appendChild(h2);
        card.appendChild(paragraph);
        card.appendChild(portrait);
        
        document.querySelector('div.cards').appendChild(card);
    };
    console.log(data)
    // Here I created a section, h2, and img tag but have not set them to contain anything yet
}

// function DisplayProphets(data)
// {
//     for(prophet of data.prophets)
//     {

//     }
// }


//let data = get_data();
const cards = document.querySelector('.cards')
//console.log(data);
//data.foreach(DisplayProphets);


