//-----------fetch API-------

async function fetchdata() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Couldn't fetch API");
        }

        const data = await response.json();
        console.log(data); // Debugging step

        // Alternative sprite URL using unpkg CDN
        let pokemonSprite = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`;

        console.log(pokemonSprite); // Check if the URL is valid
        let imgEl = document.getElementById("pokemonSprite");

        imgEl.src = pokemonSprite;
        imgEl.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}
