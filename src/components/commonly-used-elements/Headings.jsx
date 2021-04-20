const Heading = ({ text, colour, extraClasses, size, level }) => {
	let Tag = 'h' + level;

	return (
		<Tag className={`text-${colour} font-bold text-${size} mb-7 leading-none ${extraClasses}`}>{text}</Tag>
	);
};

Heading.defaultProps = {
	level: 'p',
	size: 'medium',
	text: 'Add some text. use text="" prop.',
	colour: 'green-dark',
	extraClasses: ''
}

export default Heading;