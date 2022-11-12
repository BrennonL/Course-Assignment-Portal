// Fetch the data from the companies.json file

function Display(data)
{
    console.log(data);
}



fetch('./json/companies.json')
    .then((responce) => responce.json())
    .then((data) => Display(data));

