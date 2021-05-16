import axios from 'axios';
import { useEffect, useState } from 'react';

const Header = ({animal}) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(`/wp-json/wp/v2/media/${animal.featured_media}`)
        .then(res => setImage(res.data));

        // eslint-disable-next-line
    }, [])

    return <img src={image.source_url} alt={animal.title.rendered} className="w-full"/>
}

export default Header