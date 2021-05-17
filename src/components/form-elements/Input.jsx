const Input = ({name, text, extraStyling, defaultStyling}) => {

    if (name === 'comment') {
        return (
            <div>
                <label htmlFor={name}>{text}</label>
                <textarea name={name} id={name} className={`h-72 ${defaultStyling} ${extraStyling}`}></textarea>
            </div>
        )
    }

    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input type="text" className={`${defaultStyling}`} />
        </div>
    )
}

Input.defaultProps = {
    defaultStyling: 'p-4 w-full border outline-none',
}

export default Input
