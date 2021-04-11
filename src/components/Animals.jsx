import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from './commonly-used-elements/Buttons';
import Heading from './commonly-used-elements/Headings';

const Animals = ({ limit }) => {

    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        await axios.get(`http://wordpress-api.me/wp-json/wp/v2/animals?_limit=${limit}`)
            .then(res => setAnimals(res.data));
    }

    return (
        <div className="container m-auto mt-32">
            <Heading text="Animals" size="large" />

            <div className="grid grid-cols-3">
                {animals.map((animal, i) => (
                    <div key={i}>
                        <p>{animal.title.rendered}</p>
                    </div>
                ))}
            </div>

            <div className="m-auto w-96 flex flex-col items-center gap-4 my-32">
                    <Heading text="Meet all our animals" />

                <p className="text-center">Visit our Animals page and find out different things like what they eat and where they live.</p>

                <Button to="/animals" type="primary" text="Bring me there!" />
            </div>
        </div>
    )
}

export default Animals
