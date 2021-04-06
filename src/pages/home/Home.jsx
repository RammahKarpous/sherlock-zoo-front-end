import React from 'react';
import Header from '../../components/Header';
import image from '../../assets/images/headers/giraffe.avif'
import Buttons from '../../components/commonly-used-elements/Buttons';
import Animals from '../../components/Animals';

const Home = () => {
    return (
        <div>
            <Header image={image} className="relative">
                <div 
                    className="p-10 md:p-20 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 bg-body-default absolute left-1/2 transform -translate-x-1/2 bottom-4 md:left-10 md:translate-x-0 md:bottom-auto md:top-24">

                    <h1 className="text-3xl md:text-5xl font-bold text-green-dark mb-3">Plan a day at Sherlock Zoos</h1>

                    <p className="mb-3">Plan your day, visit our zoo and be friends with all of our animals. When you come along, not only you can become friends with them, but you can also discover the new world of wild life and learn what we do!</p>

                    <Buttons text="Plan your day" to="/tickets" type="primary" />
                </div>
            </Header>

            <Animals />
        </div>
    )
}

export default Home
