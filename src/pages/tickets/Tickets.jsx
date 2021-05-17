import header from '../../assets/images/headers/tickets-header.png'
import Input from '../../components/form-elements/Input';
import Heading from './../../components/commonly-used-elements/Headings';
import InputWrap from './../../components/form-elements/InputWrap';
import Button from './../../components/commonly-used-elements/Buttons';
import CallToAction from './../../components/CallToAction';

const Tickets = () => {
    return (
        <div>
            <img src={header} alt="Tickets header" />

            <div className="xl:w-6/12 p-24 my-20 m-auto bg-body-darker">

                <Heading text="Tickets" level="1" size="large" extraStyling="mb-3" />
                <p className="lg:w-8/12 mb-12">Buy your tickets below, and become friends with all our amazing animals</p>

                <InputWrap lgCols="2" lgGap="16">
                    <div>
                        <Input type="number" name="seniors" text="Seniors" />
                        <Input type="number" name="adults" text="Adults" />
                        <Input type="number" name="teenagers" text="Teenagers" />
                        <Input type="number" name="infants" text="Infants" />
                    </div>
                    <div className="flex gap-4 flex-col items-start">
                        <Input text="text" name="name" text="Name" />
                        <Input text="email" name="email" text="Email address" />
                        <div className="flex justify-between items-center w-full">
                            <Button to="#" text="Order tickets" type="secondary" extraStyling="mt-4" />

                            <p className="text-green-dark text-medium font-semibold">£ 0.00</p>
                        </div>
                    </div>
                </InputWrap>
            </div>

            <CallToAction />
        </div>
    )
}

export default Tickets
