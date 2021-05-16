import axios from "axios"
import { useEffect, useState } from "react"

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
                <h1>{animalInfo.title.rendered}</h1>
            </div>
        )
    }

    return <p>Loading</p>

}

export default AnimalPage
