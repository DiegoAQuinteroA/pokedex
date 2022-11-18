const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../image/pokemon-sad.gif")
            const getName = document.getElementById("name");
            getName.innerHTML = "🔴" + " " + "not found";

            const pokeAbilities = document.getElementById("abilities");
            pokeAbilities.innerHTML = ("");

            const getType = document.getElementById("type");
            getType.innerHTML = ("");

            const statsName = document.getElementById("statsName");
            statsName.innerHTML = ("");

            const getID = document.getElementById("pokeID");
            getID.innerHTML= "";
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data); //mostrar los datos del pokeapi"URL" en la consola
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeInfo = data.abilities;
            pokeIfo(pokeInfo);

            let pokemoName = data.name;
            namePokemon(pokemoName);

            let pokemonTypes = data.types;
            pokeTypes(pokemonTypes);

            let stats = data.stats;
            pokeStast(stats);
            
            let id = data.id;
            pokeID(id);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeIfo = (abilites) => {
    const pokeAbilities = document.getElementById("abilities");
    pokeAbilities.innerHTML = ("");
    const abilitiesName = abilites.forEach((item) => {
        const abilitesElemenName = document.createElement("div");
        abilitesElemenName.textContent = item.ability.name;
        pokeAbilities.appendChild(abilitesElemenName);
    });
}
const namePokemon = (name) => {
    const getName = document.getElementById("name");
    getName.innerHTML = "🔴" + " " + name;
}
const pokeTypes = (type) => {
    const getType = document.getElementById("type");
    getType.innerHTML = ("");
    type.forEach(arrayType => {
        const typeElement = document.createElement("div");
        typeElement.textContent = arrayType.type.name;
        getType.appendChild(typeElement);
    });
}
const pokeStast = (stast) => {
    const statsName = document.getElementById("statsName");
    statsName.innerHTML = ("");
    const statss = stast.forEach((arrayStats) => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementBase = document.createElement("div");
        statElementName.textContent = arrayStats.stat.name;
        statElementBase.textContent = arrayStats.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementBase);
        statsName.appendChild(statElement);
    });
}

const pokeID = (id) => {
    const getID = document.getElementById("pokeID");
    getID.innerHTML= "N°" + id;
}

