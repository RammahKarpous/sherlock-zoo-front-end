import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Animal = ({animal}) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(`/wp-json/wp/v2/media/${animal.featured_media}`)
        .then(res => setImage(res.data));

        // eslint-disable-next-line
    }, [])
    return (
        <Link to={`/animal/${animal.id}`} className="relative">
            <img src={image.source_url} alt={animal.title.rendered} className="w-full"/>
            <p className="text-medium font-bold px-5 py-1 absolute bottom-0 text-white bg-green-dark">
                {animal.title.rendered}
            </p>
        </Link>
    )
}

export default Animal
