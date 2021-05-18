import Heading from "../components/commonly-used-elements/Headings"
import Input from "../components/form-elements/Input"
import InputWrap from "../components/form-elements/InputWrap"
import Button from "../components/commonly-used-elements/Buttons"
import ContactInfo from "../components/ContactInfo"

const Contact = () => {

    return (
        <div className="w-10/12 sm:w-8/12 xl:w-6/12 my-20 m-auto">
            <Heading text="Contact us" level="1" size="large" />

            <InputWrap lgCols="2">
                <Input name="first-name" type="text" text="First name" />
                <Input name="last-name" type="text" text="Last name" />
            </InputWrap>

            <InputWrap lgCols="2">
                <Input name="email" type="text" text="Email address" />
                <Input name="subject" type="text" text="Subject" />
            </InputWrap>

            <Input name="comment" type="comment" text="Your message" />

            <Button text="Send form" type="primary" to="#" extraStyling="mt-2" />

            <div className="my-20 flex flex-col gap-14">
                <ContactInfo colour="green-darker" />
            </div>
        </div>

        
    )
}

export default Contact
