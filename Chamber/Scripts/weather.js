


const weatherIcon = document.querySelector('#weatherIcon');
const weatherText = document.querySelector('#weatherTxt');

const url = 'http://api.openweathermap.org/data/2.5/forecast?q=San-Antonio&units=imperial&appid=c2cd5f54ad9d5f653c364a053f62212c';


function DisplayWeatherResults(data)
{
    const weatherDescrtiption = data.list[0].weather[0].description;
    
    weatherIcon.src = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherIcon.alt = weatherDescrtiption;
    
    let windSpeed = data.list[0].wind.speed;
    let temperature = data.list[0].main.temp;
    let f;
    if(windSpeed == 0)
    {
        f = "N/A"
    }
    else
    {
        f = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed ^ 0.16) + (0.4275 * temperature * windSpeed ^ 0.16);
    }
    text = `
    <p>Temperature: <strong>${temperature.toFixed(0)}F</strong></p>
    <p>Current Condition: ${weatherDescrtiption}</p>
    <p>Wind speed: ${windSpeed}</p>
    <p>Wind chill: ${f.toFixed(0)}</p>`

    weatherText.innerHTML = text;
}


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

            DisplayWeatherResults(data);

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