import { useParams } from "react-router"

const PokemonDetails = (props) => {

    const { pokemonId } = useParams()

    const singlePokemon = props.pokemon.find(poke => (
        poke._id === Number(pokemonId)
    ))

    console.log(singlePokemon)

    return (
        <>
            <h2>Pokemon Details</h2>
            <h3>{pokemonId}</h3>
                <dl>
                    <dt>Weight:</dt>
                    <dd></dd>
                    <dt>Height:</dt>
                    <dd></dd>
                </dl>
        </>
    )
}

export default PokemonDetails