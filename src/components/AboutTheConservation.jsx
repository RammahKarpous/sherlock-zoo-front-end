
import Button from './commonly-used-elements/Buttons'
import { SectionHeading } from './commonly-used-elements/Headings'

const AboutTheConservation = ({image, heading}) => {
    return (
        <div className="flex flex-col md:flex-row lg:justify-start lg:items-center lg:gap-32 bg-body-darker">
            <img src={image} alt="about the conservation"/>

            <div className="pl-10 pr-72">
                <SectionHeading text={heading} />

                <p className="mb-4">There are a lot of wild people all around the world in big families and smaller families. Unfortunately some of these families are being killed by other people who try to make money off them. That’s why we stand up for these beautiful animals and protect them from these kind of people. If you want to know how YOU can help? click on the button below to find out more about this.</p>
                
                <Button text="Find out more" to="/about" type="secondary" />
            </div>
        </div>
    )
}

export default AboutTheConservation
