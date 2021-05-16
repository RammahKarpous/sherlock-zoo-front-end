import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../components/animals/Animal/Header"

const AnimalPage = ({match}) => {

    const [animalInfo, setAnimalInfo] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetsAnimalInfo()

        //eslint-disable-next-line
    }, [])

    const fetsAnimalInfo = async () => {
        await axios.get(`/wp-json/wp/v2/animals/${match.params.id}`)
            .then(res => setAnimalInfo(res.data))

        setIsLoaded(true)
    }

    if (isLoaded) {
        return (
            <div>
                <Header animal={animalInfo} />
            </div>
        )
    }

    return <p>Loading</p>
}

export default AnimalPage