import { useState, useEffect } from 'react';
import axios from 'axios';
import Animal from './Animal';

const Animals = ({limit, children}) => {

    const [animals, setAnimals] = useState([])
    const [isLoaded, setIdLoaded] = useState(false)
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []); 

    const fetchData = async () => {
        await axios.get(`http://localhost:80/sherlock-zoos/wp-json/wp/v2/animals/${limit ? '?per_page=' + limit : ''}`)
            .then(res => setAnimals(res.data))
            .catch(err => console.log(err));
        setIdLoaded(true)
    }

    if (isLoaded) {
        return (
            <div className="container m-auto my-32">
                {children}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                    {animals.map((animal) => (                    
                        <Animal key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <p className="p-96 text-center font-bold text-medium">Animals are loading</p>
    )
}

export default Animals