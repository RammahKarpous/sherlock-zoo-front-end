const PriceTag = ({price, bgColor}) => {

    return (
        <button className={`bg-${bgColor} text-white py-3 px-8 rounded-md cursor-pointer focus:right-4 focus:outline-none focus:ring-${bgColor}er focus:ring-opacity-50`}>

                {price.toFixed(2)}
        </button>
    )
}

PriceTag.defaultProps = {
    price: 0.00,
    bgColor: 'white'
}

export default PriceTag
