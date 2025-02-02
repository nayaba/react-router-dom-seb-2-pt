import { useParams } from "react-router"

const PokemonDetails = (props) => {

    const { pokemonId } = useParams()

    const singlePokemon = props.pokemon.find(poke => (
        poke._id === Number(pokemonId)
    ))

    return (
        <>
            <h2>Pokemon Details</h2>
            <h3>{singlePokemon.name}</h3>
                <dl>
                    <dt>Weight:</dt>
                    <dd>{singlePokemon.weight}</dd>
                    <dt>Height:</dt>
                    <dd>{singlePokemon.height}</dd>
                </dl>
        </>
    )
}

export default PokemonDetails