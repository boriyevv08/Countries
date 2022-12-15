let inp = document.querySelector(".search-input")
let btn = document.querySelector(".btn")
let select = document.querySelector(".region")
let bodyBtn = document.querySelector(".dark-mode")
let body = document.querySelector(".dark")

let countries = [
    { url: "./img/flag-germany.png", country: "Germany", proporties: { Population: "11,319,511", Region: "Europe", Capital: "Brassels" } },
    { url: "./img/flag-usa.png", country: "United States of America", proporties: { Population: "323,947,000", Region: "Americas", Capital: "Washington, D.C" } },
    { url: "./img/flag-brasil.png", country: "Brazil", proporties: { Population: "206,135,893", Region: "Americas", Capital: "Brasília" } },
    { url: "./img/flag-iceland.png", country: "Iceland", proporties: { Population: "334,300", Region: "Europe", Capital: "Reykjavik" } },
    { url: "./img/flag-afganistan.png", country: "Afghanistan", proporties: { Population: "27,657,145", Region: "Asia", Capital: "Kabul" } },
    { url: "./img/flag-iland-iceland.png", country: "Åland Islands", proporties: { Population: "28,875", Region: "Europe", Capital: "Mariehamn" } },
    { url: "./img/flag-albania.png", country: "Albania", proporties: { Population: "2,886,026", Region: "Europe", Capital: "Tirana" } },
    { url: "./img/flag-algeria.png", country: "Algeria", proporties: { Population: "40,400,000", Region: "Afrika", Capital: "Algiers" } },
];



let countriesList = document.querySelector('.countries-list')


function render(arr) {
    for (let i of arr) {
        let li = document.createElement('li')
        li.setAttribute('class', 'countries-item')
        li.innerHTML = `
            <a href="#" class="country-link">
                <img src=${i.url} alt="${i.country}" class="country-flag-img">
                <div class="info">
                    <h2 class="country-heading">${i.country}</h2>
                    <ul class="info-list">
                        <li class="country-info"><span class="info-text">Population:</span> ${i.proporties.Population}</li>
                        <li class="country-info"><span class="info-text">Region:</span>${i.proporties.Region}</li>
                        <li class="country-info"><span class="info-text">Capital:</span> ${i.proporties.Capital}</li>
                    </ul>
                </div>
            </a>
        `
        countriesList.append(li)
    }
}


render(countries)

btn.addEventListener('click', function(){

    let filteredCountries = countries.filter(item => item.country.toLowerCase().includes(inp.value.toLowerCase()) &&  item.proporties.Region.toLowerCase().includes(select.value.toLowerCase()) )
    
    countriesList.innerHTML=null

    for (let i of filteredCountries) {
        let li = document.createElement('li')
        li.setAttribute('class', 'countries-item')
        li.innerHTML = `
            <a href="#" class="country-link">
                <img src=${i.url} alt="${i.country}" class="country-flag-img">
                <div class="info">
                    <h2 class="country-heading">${i.country}</h2>
                    <ul class="info-list">
                        <li class="country-info"><span class="info-text">Population:</span> ${i.proporties.Population}</li>
                        <li class="country-info"><span class="info-text">Region:</span>${i.proporties.Region}</li>
                        <li class="country-info"><span class="info-text">Capital:</span> ${i.proporties.Capital}</li>
                    </ul>
                </div>
            </a>
        `
        countriesList.append(li)
    }
})

// select.addEventListener('change', function(){
//     let filteredCountries2 = countries.filter(item => item.proporties.Region.toLowerCase().includes(select.value.toLowerCase()))
//     countriesList.innerHTML=null

//     for (let i of filteredCountries2) {
//         let li = document.createElement('li')
//         li.setAttribute('class', 'countries-item')
//         li.innerHTML = `
//             <a href="#" class="country-link">
//                 <img src=${i.url} alt="${i.country}" class="country-flag-img">
//                 <div class="info">
//                     <h2 class="country-heading">${i.country}</h2>
//                     <ul class="info-list">
//                         <li class="country-info"><span class="info-text">Population:</span> ${i.proporties.Population}</li>
//                         <li class="country-info"><span class="info-text">Region:</span>${i.proporties.Region}</li>
//                         <li class="country-info"><span class="info-text">Capital:</span> ${i.proporties.Capital}</li>
//                     </ul>
//                 </div>
//             </a>
//         `
//         countriesList.append(li)
//     }
// })

bodyBtn.addEventListener('click', function(){


body.classList.toggle( 'dark')





})


// <li class="countries-item">
    // <a href="#" class="country-link">
    //     <img src="img/flag-germany.png" alt="germany" class="country-flag-img">
    //     <div class="info">
    //         <h2 class="country-heading">Germany</h2>
    //         <ul class="info-list">
    //             <li class="country-info"><span class="info-text">Population:</span> 81,770,900</li>
    //             <li class="country-info"><span class="info-text">Region:</span> Europe</li>
    //             <li class="country-info"><span class="info-text">Capital:</span> Berlin</li>
    //         </ul>
    //     </div>
    // </a>
// </li>