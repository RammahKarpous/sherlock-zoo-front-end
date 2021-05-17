import axios from "axios"
import { useEffect, useState } from "react"
import FunFacts from "../../components/animals/Animal/FunFacts"
import Header from "../../components/animals/Animal/Header"
import Animals from "../../components/animals/Animals"
import Heading from "../../components/commonly-used-elements/Headings"
import PriceTag from "../../components/form-elements/PriceTag"
import Button from "../../components/commonly-used-elements/Buttons"

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
                
                <div className="py-20 bg-body-darker">
                    <div className="container"></div>
                </div>

                <div className="grid grid-col-1 items-center gap-32 md:grid-cols-2 justify-center bg-green-dark">
                    <div className="ml-52">
                        <Heading colour="white" text={`About ${animalInfo.title.rendered}s`} />
                        <div 
                            className="text-white my-2 dangerous w-full" 
                            dangerouslySetInnerHTML={{ __html: animalInfo.acf.about_text }}></div>
                    </div>

                    <img 
                        src={animalInfo.acf.about_the_animal_image} 
                        alt={`${animalInfo.title.rendered}`}
                        className="w-full " />

                </div>

                <div className="container">
                    <div className="grid grid-col-1 sm:grid-col-2 md:grid-col-3">
                        <FunFacts animal={animalInfo} />
                    </div>
                </div>

                <Animals limit={3}>
                    <Heading text="Meet other animals you might like" size="medium" extraStyling="mb-4" />
                </Animals>

                <div className="py-10 bg-green-secondary flex items-center justify-center gap-6">
                    <PriceTag price={5.00} bgColor="green-dark" />
                    <PriceTag price={10.00} bgColor="green-dark" />
                    <PriceTag price={15.00} bgColor="green-dark" />
                    <PriceTag price={20.00} bgColor="green-dark" />
                    <Button to="#" type="primary" text="Donate" />
                </div>
            </div>
        )
    }

    return <p>Loading</p>
}

export default AnimalPage