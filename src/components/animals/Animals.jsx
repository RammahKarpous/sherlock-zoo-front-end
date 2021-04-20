// import axios from 'axios';
// import { useState, useEffect } from 'react';
import Button from '../commonly-used-elements/Buttons';
import Heading from '../commonly-used-elements/Headings';
import Animal from './Animal';

const Animals = ({ children }) => {

    return (
        <div className="container m-auto mt-32">
            {children}
        </div>
    )
}

export default Animals
