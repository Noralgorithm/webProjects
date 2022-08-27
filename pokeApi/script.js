'strict mode'
let pokemon;
let container = document.querySelector('.container')

const createCard = async(i)=>{
    pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let pkmName = pokemon.data.name;
    console.log(i+pkmName);
    let id = pokemon.data.id;
    let imgURL = pokemon.data.sprites.other.dream_world.front_default;

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    container.innerHTML += 
    `<div class="bg-card" style="background-color:#${randomColor}">
        <div class="card">
            <div class="card-header">
                <img src='${imgURL}'/>
            </div>
            <div class="card-body">
                <h1 class="pokemon-name">${pkmName}</h2>
                <h1 class="pokemon-id">#${id}</h3>
            </div>
        </div>
    </div>`
}

for (let i = 1; i<151; i++){
    createCard(i);
}



