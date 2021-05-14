import Animal from "../../components/animals/Animal"
import Animals from "../../components/animals/Animals"

// Images
import Bison from '../../assets/images/animals/bison.png';
import BrownBear from '../../assets/images/animals/brown-bear.png';
import Lion from '../../assets/images/animals/lion.png';

const AnimalsPage = () => {
    return (
        <div>
            <Animals>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                    <Animal to="/animals/bison" name="Bison" image={Bison} />
                    <Animal to="/animals/lion" name="Lion" image={Lion} />
                    <Animal to="/animals/brown-bear" name="Brown bear" image={BrownBear} />
                </div>
            </Animals>
        </div>
    )
}

export default AnimalsPage
