export const PageHeading = ({ text, colour }) => {
	return <h1 className="text-7xl font-bold mb-14">{text}</h1>;
};

export const SectionHeading = ({ text, colour }) => {
	return (
		<h2 className="text-4xl font-bold text-green-dark mb-0">{text}</h2>
	);
};

export const SubHeading = ({ text, colour }) => {
	return <h3 className="text-white font-bold text-2xl mb-7">{text}</h3>;
};
