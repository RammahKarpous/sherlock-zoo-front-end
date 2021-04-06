export const PageHeading = ({ text, colour }) => {
	return <h1 className="text-7xl font-bold">{text}</h1>;
};

export const SectionHeading = ({ text, colour }) => {
	return (
		<h2 className="text-4xl capitalize font-bold text-green-dark">{text}</h2>
	);
};

export const SubHeading = ({ text, colour }) => {
	return <h3 className="text-white font-bold text-2xl mb-7">{text}</h3>;
};
