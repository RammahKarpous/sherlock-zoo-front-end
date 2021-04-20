import React/*, { useState, useEffect }*/ from 'react';
// import axios from 'axios';
import Header from '../../components/Header';
import AboutTheConservation from '../../components/AboutTheConservation';
import meerkats from '../../assets/images/home-conservation-img.png'
import Animals from '../../components/animals/Animals';
import Heading from '../../components/commonly-used-elements/Headings';
import Animal from '../../components/animals/Animal';
import Button from '../../components/commonly-used-elements/Buttons';

// Images
import HeaderImage from '../../assets/images/headers/giraffe.avif';
import Bison from '../../assets/images/animals/bison.png';
import BrownBear from '../../assets/images/animals/brown-bear.png';
import Lion from '../../assets/images/animals/lion.png';

const Home = () => {

    // const [animals, setAnimals] = useState([]);
    // useEffect(() => {
    //     fetchData();
    //     // eslint-disable-next-line
    // }, []);

    // const fetchData = async () => {
    //     await axios.get(`http://wordpress-api.me/wp-json/wp/v2/animals?_limit=${limit}`)
    //         .then(res => setAnimals(res.data));
    // }

    return (
        <div>
            <Header image={HeaderImage} className="relative">
                <div 
                    className="p-10 md:p-16 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 bg-body-default absolute left-1/2 transform -translate-x-1/2 bottom-4 md:left-10 md:translate-x-0 md:bottom-auto md:top-24">

                    <Heading size="large" level="1" text="Plan a day at Sherlock Zoos" />

                    <p className="mb-3">Plan your day, visit our zoo and be friends with all of our animals. When you come along, not only you can become friends with them, but you can also discover the new world of wild life and learn what we do!</p>

                    <Button text="Plan your day" to="/tickets" type="primary" />
                </div>
            </Header>

            <Animals>
                <Heading text="Animals" size="large" />
                <div className="grid grid-cols-3 gap-14">
                    {/* {animals.map((animal, i) => (
                        <div key={i}>
                            <p>{animal.title.rendered}</p>
                        </div>
                    ))} */}

                    <Animal to="/" name="Bison" image={Bison} />
                    <Animal to="/" name="Lion" image={Lion} />
                    <Animal to="/" name="Brown bears" image={BrownBear} />
                </div>

                <div className="m-auto w-96 flex flex-col items-center gap-4 my-32">
                        <Heading text="Meet all our animals" />

                    <p className="text-center">Visit our Animals page and find out different things like what they eat and where they live.</p>

                    <Button to="/animals" type="primary" text="Bring me there!" />
                </div>
            </Animals>

            <AboutTheConservation 
                image={meerkats} 
                heading="About our conservation and what we do." />
        </div>
    )
}

export default Home
