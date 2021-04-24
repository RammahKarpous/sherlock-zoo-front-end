import { Link } from 'react-router-dom';
import arrow from '../../assets/images/icons/arrow-right.svg';

const ArrowLink = ({to, text, colour}) => {
    return (
        <Link to={to} className={`flex gap-24 justify-between w-full font-semibold hover:pr-20 group transition text-${colour}`}>
            {text}
            <img src={arrow} className="group-hover:transform translate-x-4" alt="arrow right"/>
        </Link>
    )
}

ArrowLink.defaultProps = {
    colour: 'black'
}

export default ArrowLink
