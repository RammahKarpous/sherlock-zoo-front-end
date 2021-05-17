const InputWrap = ({lgCols, children}) => {
    return (
        <div className={`
            grid ${`
            grid-cols-1 
            sm:grid-cols-${lgCols - 2} 
            md:grid-cols-${lgCols - 1} 
            lg:grid-cols-${lgCols}` } 
            gap-2 lg:gap-8
            my-2`
        }>
            {children}
        </div>
    )
}

export default InputWrap
