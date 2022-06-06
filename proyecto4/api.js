let lista = document.getElementById("listaPokemon")

function consultarPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
        response.json()
        .then(function(pokemon) {
            crearPokemon(pokemon, num)

        })

    })
}
function consultarPokemones(){
    let primerId = Math.round(Math.random() * 350 )
    let segundoId = Math.round(Math.random() * 350 )
    let tercerId = Math.round(Math.random() * 350 )
    let cuartoId = Math.round(Math.random() * 350 )
    let quintoId = Math.round(Math.random() * 350 )
    let sextoId = Math.round(Math.random() * 350 )

    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
    consultarPokemon(tercerId, 3)
    consultarPokemon(cuartoId, 4)
    consultarPokemon(quintoId, 5)
    consultarPokemon(sextoId, 6)
}

function crearPokemon(pokemon, num){
    let item = lista.querySelector(`#pokemon-${num}`)

    let imagen = item.getElementsByTagName("img")[0]
    imagen.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")[0]
    nombre.textContent = pokemon.name

}

consultarPokemones()