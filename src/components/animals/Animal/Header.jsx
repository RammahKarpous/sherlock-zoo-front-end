import axios from 'axios';
import { useEffect, useState } from 'react';

const Header = ({animal}) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:80/sherlock-zoos/wp-json/wp/v2/media/${animal.featured_media}`)
        .then(res => setImage(res.data));

        // eslint-disable-next-line
    }, [])

    return (
        <div className="h-96 overflow-hidden">
            <img src={image.source_url} alt={animal.title.rendered} className="w-full"/>
        </div>
    )
}

export default Header