import { useState, useEffect } from 'react';
import axios from 'axios';

import Animal from "../../components/animals/Animal"
import Animals from "../../components/animals/Animals"

// Images
import Bison from '../../assets/images/animals/bison.png';
import BrownBear from '../../assets/images/animals/brown-bear.png';
import Lion from '../../assets/images/animals/lion.png';

const AnimalsPage = () => {

    const [animals, setAnimals] = useState([])
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        await axios.get(`/sherlock-zoos/wp-json/wp/v2/animals/`)
            .then(res => setAnimals(res.data));
    }

    return (
        <div>
            <Animals>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">

                    {animals.map((animal, i) => (
                        <div key={i}>
                            <p>{animal.title.rendered}</p>
                        </div>
                    ))}

                    <Animal to="/animals/bison" name="Bison" image={Bison} />
                    <Animal to="/animals/lion" name="Lion" image={Lion} />
                    <Animal to="/animals/brown-bear" name="Brown bear" image={BrownBear} />
                </div>
            </Animals>
        </div>
    )
}

export default AnimalsPage
