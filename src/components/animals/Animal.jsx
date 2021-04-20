import { Link } from 'react-router-dom';

const Animal = ({image, name, to}) => {
    return (
        <Link to={to} className="relative">
            <img src={image} alt={name} className="w-full"/>
            <p className="text-medium font-bold px-5 py-1 absolute bottom-0 text-white bg-green-dark">{name}</p>
        </Link>
    )
}

export default Animal
