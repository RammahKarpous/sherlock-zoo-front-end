import React from 'react';
import Header from '../../components/Header';
import AboutTheConservation from '../../components/AboutTheConservation';
import Animals from '../../components/animals/Animals';
import Heading from '../../components/commonly-used-elements/Headings';
import CallToAction from "../../components/CallToAction";
import Button from '../../components/commonly-used-elements/Buttons';

// Images
import HeaderImage from '../../assets/images/headers/giraffe.avif';
import meerkats from '../../assets/images/home-conservation-img.png';
import { links } from './../../components/navigation/links';

const Home = () => {

    return (
        <div>
            <Header image={HeaderImage} className="relative">
                <div 
                    className="p-10 md:p-16 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 bg-body-default absolute left-1/2 transform -translate-x-1/2 bottom-4 md:left-10 md:translate-x-0 md:bottom-auto md:top-24">

                    <Heading size="large" level="1" text="Plan a day at Sherlock Zoos" />

                    <p className="mb-3">Plan your day, visit our zoo and be friends with all of our animals. When you come along, not only you can become friends with them, but you can also discover the new world of wild life and learn what we do!</p>

                    <Button text="Plan your day" to={links[4].to} type="primary" />
                </div>
            </Header>

            <Animals limit={3}>
                <Heading text="Animals" size="medium" extraStyling="mb-4" />
            </Animals>
            
            <div className="m-auto sm:w-96 flex flex-col items-center gap-4 my-32">
                    <Heading text="Meet all our animals" extraStyling="text-center" />

                <p className="text-center">Visit our Animals page and find out different things like what they eat and where they live.</p>

                <Button to="/animals" type="primary" text="Bring me there!" />
            </div>

            <AboutTheConservation 
                image={meerkats} 
                heading="About our conservation and what we do." />
        
            <CallToAction />
        </div>
    )
}

export default Home
