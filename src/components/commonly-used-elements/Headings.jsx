const Heading = ({ text, colour, extraClasses, size, level }) => {
	const tag = 'h' + level;

	return (
		<tag className={`text-${colour} font-bold text-${size} mb-7 ${extraClasses}`}>{text}</tag>
	);
};

Heading.defaultProps = {
	level: '2',
	size: 'medium',
	text: 'Add some text. use text="" prop.',
	colour: 'green-dark',
	extraClasses: ''
}

export default Heading;