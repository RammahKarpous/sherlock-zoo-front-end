import axios from 'axios';
import { useState, useEffect } from 'react';

const Activity = ({activity}) => {
    
    const [image, setImage] = useState('')

    useEffect(() => {
        fetchActivityImage()

        // eslint-disable-next-line
    }, [])

    const fetchActivityImage = async () => {
        await axios.get(`http://localhost:80/sherlock-zoos/wp-json/wp/v2/media/${activity.featured_media}`)
        .then(res => setImage(res.data))
    }

    return (
        <div className="grid grid-cols-2 items-center">
            <img src={image.source_url} className={`w-full`} alt={activity.title.rendered} />

            <div className={`p-32` }>
                <h2 className="mb-3">{ activity.title.rendered }</h2>
                <div className="dangerous" dangerouslySetInnerHTML={{ __html: activity.content.rendered }}></div>
            </div>
        </div>
    )
}

export default Activity
