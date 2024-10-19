fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(digimon => {
    for (let index = 0; index < digimon.length; index++){
        let corpo = document.querySelector(".tableBody")
        let linha = document.createElement("tr")
        linha.innerHTML = 
           `  <td>${digimon[index].name}</td>
             <td>${digimon[index].level}</td>
             <td><img src="${digimon[index].img}" alt=""></td>`
        corpo.appendChild(linha)
    }
})