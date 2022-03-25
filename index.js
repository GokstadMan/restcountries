let countryArray=[];

async function getCountries(url) {
    let countries = await fetch(url);
    let jsonDAta = await countries.json();
    jsonDAta.forEach(element => {
    countryArray.push(element)
    countryClass = new Country(element.name.common,element.continents,element.region,element.population);
    });
}

class Country {
    constructor(name,continent,region,population) {
        this.name=name;
        this.continent=continent;
        this.region=region;
        this.population=population;
    }

}

function listCountries() {
    const countries = document.getElementById("countries")
    for (let i = 0; i < countryArray.length; i++) {
        countries.innerHTML += `<li id="${i}"> 
            <h3>name: ${countryArray[i].name.common} 
            continent: ${countryArray[i].continents}
            region: ${countryArray[i].region}
            population: ${countryArray[i].population} 
            </h3> </li>`

    }
}

getCountries("https://restcountries.com/v3.1/all")
    .then(() => { console.log(countryArray); })
    .then(() => { console.log(countryArray[0].name); })
    .then(() => { console.log(countryArray[249].name); })
    .then(() => { listCountries() })
    .then(() => { for (let i = 0; i < countryArray.length; i++) { console.log(countryArray[i].capital) } })
