// Fetch the data from the companies.json file

function Display(data)
{
    console.log(data);

    for(Element of data.Companies)
    {
        console.log(Element.Name)

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let paragraph = document.createElement('div');

        h2.textContent = Element.Name;

        // Set image attributes
        img.setAttribute('src', Element.Image);
        img.setAttribute('alt', 'Company' + Element.Name);
        img.setAttribute('loading', 'lazy');

        paragraph.innerHTML = `
        <p>Phone: ${Element.Phone_number}</p>
        <p>Adress: ${Element.Adress}</p>
        <p><a href = '${Element.URL}'>Website</a></p>
        <p>Membership: ${Element.Membership_status}</p>`;

        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(paragraph);

        document.querySelector('div#companies_display').appendChild(card);


    }
}



fetch('Scripts/companies.json')
    .then((response) => response.json())
    .then((data) => Display(data));

