import plus from '../../assets/images/icons/plus.svg'
import minus from '../../assets/images/icons/minus.svg'
import { useState } from 'react'

const Input = ({name, type, text, button, labelColour, extraStyling, defaultStyling}) => {

    let [number, setNumber] = useState(0);

    if (type === 'comment') {
        return (
            <div className="w-full">
                <label htmlFor={name} className={labelColour}>{text}</label>
                <textarea name={name} id={name} className={`h-72 ${defaultStyling} ${extraStyling}`}></textarea>
            </div>
        )
    }

    if (type === 'number') {
        return (
            <div className="w-full flex-row flex gap-4 justify-between items-center">
                <label htmlFor={name} className={labelColour}>{text}</label>

                <div className="flex flex-row justify-end gap-4 items-center">
                    <button 
                        onClick={() => setNumber(number - 1)} 
                        className={`${button}`}>
                        
                        <img src={minus} alt="add" />
                    </button>
                    
                    <input 
                        className="text-medium w-10 bg-transparent focus:outline-none" 
                        onChange={e => setNumber(e.target.value)} 
                        value={number} />
                    
                    <button 
                        onClick={() => setNumber(number + 1)} 
                        className={`${button}`}>
                        
                        <img src={plus} alt="subtract" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <label htmlFor={name} className={labelColour}>{text}</label>
            <input type={type} className={`${defaultStyling}`} id={name} />
        </div>
    )
}

Input.defaultProps = {
    defaultStyling: 'p-3 w-full border outline-none',
    button: 'bg-transparent border-none focus:outline-none'
}

export default Input
