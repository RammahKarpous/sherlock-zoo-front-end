import { useState, useEffect } from 'react';
import axios from 'axios';
import Animal from './Animal';

const Animals = ({limit}) => {

    const [animals, setAnimals] = useState([])
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []); 

    const fetchData = async () => {
        await axios.get(`/sherlock-zoos/wp-json/wp/v2/animals/${limit ? '?per_page=' + limit : ''}`)
            .then(res => setAnimals(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div className="container m-auto my-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                {animals.map((animal) => (                    
                    <Animal key={animal.id} to="/animals/bison" animal={animal} />
                ))}
            </div>
        </div>
    )
}

export default Animals