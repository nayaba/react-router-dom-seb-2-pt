import { Link } from "react-router"
import PokemonDetails from "../PokemonDetails/PokemonDetails"

const PokemonList = props => {
	return (
		<>
			<h2>Pokemon</h2>
			<ul>
				{props.pokemon.map(poke => (
					<li>
					<Link to={`/pokemon/${poke._id}`}>{poke.name}</Link>	
				
					</li>
				))}
			</ul>
		</>
	)
}

export default PokemonList
