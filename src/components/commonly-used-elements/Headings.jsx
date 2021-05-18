const Heading = ({ text, colour, extraStyling, weight, level }) => {
	let Tag = 'h' + level;

	return (
		<Tag className={`
			text-${colour} 
			font-${weight}
			leading-none
			${extraStyling}`}>
				
			{text}
		</Tag>
	);
};

Heading.defaultProps = {
	level: '3',
	text: 'Add some text. use text="" prop.',
	colour: 'green-dark',
	extraStyling: 'hello',
	weight: 'bold'
}

export default Heading;