import Button from "./commonly-used-elements/Buttons";
import Heading from "./commonly-used-elements/Headings";

const CallToAction = () => {
	return (
		<div className="bg-green-primary flex flex-col gap-5 justify-center py-12 items-center">
			<Heading 
				colour="white" 
				text="How you can help?"
				level="3"
				extraStyling="mb-0 text-center" />

			<p className="text-white text-center px-4 max-w-md">
				Whenever you visit our zoo, you help us with protecting all the animals
				in our conservation.
			</p>

			<Button to="/tickets" text="Find out more" type="primary" />
		</div>
	);
};

export default CallToAction;
