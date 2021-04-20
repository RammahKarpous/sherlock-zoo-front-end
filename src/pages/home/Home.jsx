import React from 'react';
import Header from '../../components/Header';
import image from '../../assets/images/headers/giraffe.avif'
import Buttons from '../../components/commonly-used-elements/Buttons';
import AboutTheConservation from '../../components/AboutTheConservation';
import meerkats from '../../assets/images/home-conservation-img.png'
import Animals from '../../components/animals/Animals';
import Heading from '../../components/commonly-used-elements/Headings';

const Home = () => {
    return (
        <div>
            <Header image={image} className="relative">
                <div 
                    className="p-10 md:p-20 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 bg-body-default absolute left-1/2 transform -translate-x-1/2 bottom-4 md:left-10 md:translate-x-0 md:bottom-auto md:top-24">

                    <Heading size="large" level="1" text="Plan a day at Sherlock Zoos" />

                    <p className="mb-3">Plan your day, visit our zoo and be friends with all of our animals. When you come along, not only you can become friends with them, but you can also discover the new world of wild life and learn what we do!</p>

                    <Buttons text="Plan your day" to="/tickets" type="primary" />
                </div>
            </Header>

            <Animals />

            <AboutTheConservation 
                image={meerkats} 
                heading="About our conservation and what we do." />
        </div>
    )
}

export default Home
