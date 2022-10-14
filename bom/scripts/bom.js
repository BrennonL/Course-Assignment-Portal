const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', function(){
    if (input.value.length === 0){
        alert("Please add a Book of Mormon title")
    }

    else{

    
        let content = input.value;
	    const lielement = document.createElement('li');
        
        const licontent = document.createElement('p');
        licontent.innerHTML = content;

        const buttoncontent = document.createElement('button');
        buttoncontent.textContent = "❌";


        lielement.appendChild(licontent);
        lielement.appendChild(buttoncontent);
        list.appendChild(lielement);

        input.value = "";
        buttoncontent.addEventListener('click', function(){
            list.removeChild(lielement)
        })
    }
});