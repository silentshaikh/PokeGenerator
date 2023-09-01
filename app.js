let url = "https://pokeapi.co/api/v2/pokemon/";
let pokeCards = document.querySelector(".card");
let pokeBtn = document.querySelector(".btn");
 
const pokeGenerate  = async () => {
    let pokeId = Math.floor(Math.random()*150) + 1;
    let dataUrl = url+pokeId;
   try {
    let myFetch = await fetch(dataUrl);
    let myData = await myFetch.json();
    cardsGenerator(myData);
   } catch (error) {
    alert(error);
   }
}
const cardsGenerator = (data) => {
    console.log(data);
    let myHp = data.stats[0].base_stat;
    let pokeImg = data.sprites.other.dream_world.front_default;
    let namePoke = data.name;
    let pokeAttack = data.stats[1].base_stat;
    let pokeDefence = data.stats[2].base_stat;
    let pokeSpeed = data.stats[5].base_stat;
    pokeCards.innerHTML = `<p class="call">HP <span>${myHp}</span></p>
    <img src="${pokeImg}" alt="pokaemon">
    <h1>${namePoke}</h1>
    <div class="typr">
        
    </div>
   <div class="box">
    <div class="res">
        <strong>${pokeAttack}</strong>
        <p>Attack</p>
    </div>
    <div class="res">
        <strong>${pokeDefence}</strong>
        <p>Defence</p>
    </div>
    <div class="res">
        <strong>${pokeSpeed}</strong>
        <p>Speed</p>
    </div>
   </div>`;
   typeGen(data.types);
}
let typeGen = (type) => {
    type.forEach(element => {
        let crePara = document.createElement("p");
        crePara.textContent = element.type.name;
        let pokeType = document.querySelector(".typr");
        pokeType.appendChild(crePara);
    });
}
pokeBtn.addEventListener("click",pokeGenerate);
pokeGenerate()
