import Header from "../components/Header"
import activitiesHeader from '../assets/images/headers/activities-header.png' 
import Activity from "../components/Activity"
import { useState, useEffect } from 'react';
import axios from "axios";

const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        getActivities()

        //eslint-disable-next-line
    }, [])

    const getActivities = async () => {
        await axios.get('http://localhost:80/sherlock-zoos/wp-json/wp/v2/activities/')
            .then(res => setActivities(res.data))
    }

    return (
        <div>
            <Header image={activitiesHeader} />

            <div className="m-auto w-96 my-20">
                <h1 className="mb-4 text-center">Activities</h1>
                
                <p className="text-center">
                    Participate in one of our activities and help us raise fund for our conservation department.  
                </p>
            </div>

            {activities.map(activity => (
                <Activity key={activity.id} activity={activity} />
            ))}
        </div>
    )
}

export default Activities
