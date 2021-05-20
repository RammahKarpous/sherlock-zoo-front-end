import Header from "../components/Header";
import HeaderImage from '../assets/images/headers/about-header.png';
import Heading from "../components/commonly-used-elements/Headings";

// Images
import AboutSherlockImage from '../assets/images/kid-with-deers.png';
import ConservationImg from '../assets/images/about-the-conservation.png';
import ArrowLink from "../components/commonly-used-elements/ArrowLink";

const About = () => {
    return (
        <div>
            <Header image={HeaderImage} />

            {/* About the zoo */}
            <div className="flex flex-col-reverse xl:flex-row mb-24 xl:gap-32 xl:w-11/12 xl:mr-0 xl:ml-auto">
                <div className="lg:mt-28 mt-16 px-10">
                    <Heading level="2" text="About Sherlock Zoos" size="medium" extraStyling="mb-7" />

                    <div className="grid grid-cols-none 2xl:grid-cols-2 gap-5 lg:gap-16">
                        <p>Sherlock zoos is located two places. One in Bristol and the other one in is opened new in Philadelphia. The zoo has historically been known as the bca animal management centre, as its primary use was as a training facility for those students enrolled onto the various animal management courses that the college offers. The zoo is still (and will continue to be) a highly regarded practical training resource for our students. It provides our students with the opportunity to learn and develop practical skills that are so essential for making it in the animal industry.</p>
                    </div>
                </div>

                <img src={AboutSherlockImage} alt="Kid feeds deers" className="w-full" />
            </div>

            {/* The conservation */}
            <div className="bg-body-darker flex flex-col justify-between xl:flex-row">
                <img src={ConservationImg} className="lg:w-7/12" alt="Conservation work"/>

                <div className="flex-column">
                    <div className="py-20 px-10 md:p-20 lg:w-8/12">
                        <Heading text="Our Conservation" level="2" extraStyling="mb-7" />

                        <p className="mb-4">There are a lot of wild animals all around the world in big families and smaller families. Unfortunately some of these families are being killed by other people who try to make money off them. That’s why we stand up for these beautiful animals and protect them from these kind of people. If you want to know how YOU can help? click on the button below to find out more about this.</p>
                    </div>

                    <div className="bg-green-primary px-10 py-20 md:p-20 flex flex-col lg:flex-row gap-10">
                        <div className="md:w-96">
                            <Heading text="How you can help?" colour="white"  />
                            <p className="text-white">There are more than only visiting our zoo, you can also adobt and animal or even donate.</p>
                        </div>

                        <div className="flex flex-col gap-6 w-64">
                            <ArrowLink to="/" text="Book a ticket" colour="white" />
                            <ArrowLink to="/" text="Adobt an animal" colour="white" />
                            <ArrowLink to="/" text="Donate" colour="white" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
