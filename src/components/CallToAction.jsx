import Button from "./commonly-used-elements/Buttons";

const CallToAction = () => {
	return (
		<div className="bg-green-primary flex flex-col gap-5 justify-center py-12 items-center">
			<h3 className="text-white text-4xl font-bold block pb-2">
				How you can help?
			</h3>
			<p className="text-white text-center px-4 max-w-md">
				Whenever you visit our zoo, you help us with protecting all the animals
				in our conservation.
			</p>
			<Button to="/tickets" text="Find out more" type="primary" />
		</div>
	);
};

export default CallToAction;
