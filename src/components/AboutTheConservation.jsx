
import Button from './commonly-used-elements/Buttons'
import Heading from './commonly-used-elements/Headings'

const AboutTheConservation = ({image, heading}) => {
    return (
        <div className="bg-body-darker">
            <div className="m-auto flex flex-col lg:flex-row lg:justify-start lg:items-center lg:gap-0 xl:32">
                <img src={image} alt="about the conservation" className="w-full lg:w-6/12" />

                <div className="px-4 w-full sm:w-10/12 sm:m-auto sm:my-10 my-10 md:w-8/12 lg:w-5/12 xl:w-4/12">
                    <Heading text={heading} />

                    <p className="mb-4">There are a lot of wild people all around the world in big families and smaller families. Unfortunately some of these families are being killed by other people who try to make money off them. That’s why we stand up for these beautiful animals and protect them from these kind of people. If you want to know how YOU can help? click on the button below to find out more about this.</p>
                    
                    <Button text="Find out more" to="/about" type="secondary" />
                </div>
            </div>
        </div>
    )
}

export default AboutTheConservation
