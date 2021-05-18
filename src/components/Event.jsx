import { Link } from 'react-router-dom';

const Event = ({bgImage, headLine, date, extraStyling, excerpt}) => {
    return (
        <div style={{ background: `url(${bgImage})` }} className={`h-xl bg-no-repeat bg-cover relative ${extraStyling}`}>
            <div className="p-6 flex flex-col gap-1 w-10/12 absolute left-7 bottom-7 bg-body-darker">
                <h2>{headLine}</h2>
                <small className="mt-1">Published on: {date}</small>
                <p>{excerpt}</p>
                <Link to="#" className="text-green-primary">Read more</Link>
            </div>
        </div>
    )
}

export default Event
