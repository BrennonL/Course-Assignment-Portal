
// I assigned the variables below to different parts of the HTML
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#currently')
const captionDesc = document.querySelector('figcaption');
const weatherIcon = document.querySelector('#weather-icon');

// Here is the url API is stored in the variable url
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=c2cd5f54ad9d5f653c364a053f62212c';

async function apiFetch()
{
   try
   {
        const response = await fetch(url)

        // If the response is normal then run the code
        if(response.ok)
        {
            // Turn the promise data into a json file
            const data = await response.json();

            // I have this here for the purpose of de-buging and finding values from the data 
            console.log(data);
            DisplayResults(data);
        }
        else
        {
            console.log(`Response not Ok ${await response.text()}`);
        }
   }
   catch(error)
   {
        console.log(`Error ${error.message}`)
   } 
}

apiFetch();


function Capitalize(string)
{
    // This will take the first letter of the string and capitalize it
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}



function DisplayResults(data)
{
    console.log(data)
    currentTemp.innerHTML = `<strong>${data.list[0].main.temp.toFixed(0)}</strong>`;
    console.log(data.list[0].main.temp);

    // Set the the_description variable to the description of the weather
    const the_description = data.list[0].weather[0].description

    description.textContent = Capitalize(the_description);
    captionDesc.textContent = the_description;

    // Set the img tag's src and alt values
    weatherIcon.src = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherIcon.alt = the_description

}
