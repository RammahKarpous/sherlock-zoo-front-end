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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus doloribus aspernatur asperiores vel consectetur ad corporis ipsa atque eligendi fuga? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo in dolorem unde incidunt repudiandae cumque consectetur mollitia culpa cum asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi mollitia eos facilis a, accusantium quidem aliquam cum eveniet illum?</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus doloribus aspernatur asperiores vel consectetur ad corporis ipsa atque eligendi fuga? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo in dolorem unde incidunt repudiandae cumque consectetur mollitia culpa cum asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi mollitia eos facilis a, accusantium quidem aliquam cum eveniet illum?</p>

                        <div>
                            <Heading text="Sherlock Zoe" level="3" extraStyling="mb-4" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic quisquam sed voluptates quae pariatur id a in mollitia aspernatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo in dolorem unde incidunt repudiandae cumque consectetur mollitia culpa cum asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi mollitia eos facilis a, accusantium quidem aliquam cum eveniet illum?</p>
                        </div>

                        <div>
                            <Heading text="Sherlock Zoe" level="3" extraStyling="mb-4" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam nisi eligendi unde architecto soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eligendi.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in minima possimus ducimus vel ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eligendi.</p>
                        </div>

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

                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloribus saepe magnam alias, ipsam dolorum quod necessitatibus veritatis dicta earum.</p>

                        <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, excepturi. Nihil laudantium repellat cumque neque vero. Atque quos ex molestiae?</p>

                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa repellendus vero deserunt obcaecati, magnam quam praesentium ipsa voluptatem consectetur.</p>
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
