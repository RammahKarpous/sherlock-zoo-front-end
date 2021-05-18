import Heading from "./commonly-used-elements/Headings"

const ContactInfo = ({colour}) => {
    return (
        <article>
            <Heading text="Contact info" colour={colour} level="3" extraClasses="mt-10 md:mt-0" />

            <div className={`text-${colour}`}>
                <p>Castle Hill, Bristol</p>
                <p className="mb-5">BS1 5JS</p>

                <p>Tel: 0272 123 456</p>
                <p>Mail: info@sherlockzoo.com</p>
            </div>
        </article>
    )
}

export default ContactInfo
