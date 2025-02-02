import { useState } from "react"
import { useNavigate } from "react-router"

const initialState = {
    name: '',
    weight: 0,
    height: 0,
}

const PokemonForm = (props) => {

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // sends data from the form somewhere else
        props.addPokemon(formData)
        // clears the formData
        setFormData(initialState)
        navigate('/pokemon')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="">Weight: </label>
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
                <label htmlFor="">Height: </label>
                <input type="number" name="height" value={formData.height} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PokemonForm