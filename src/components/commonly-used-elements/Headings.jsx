const Heading = ({ text, colour, extraStyling, weight, size, level }) => {
	let Tag = 'h' + level;

	return (
		<Tag className={`
			text-${colour} 
			font-${weight} 
				${size === 'small' ? 'text-small' : ''}
				${size === 'medium' ? 'text-small md:text-medium' : ''}
				${size === 'large' ? 'text-medium xl:text-large' : ''}
			leading-none
			${extraStyling}`}>
				
			{text}
		</Tag>
	);
};

Heading.defaultProps = {
	level: '3',
	size: 'medium',
	text: 'Add some text. use text="" prop.',
	colour: 'green-dark',
	extraStyling: 'hello',
	weight: 'bold'
}

export default Heading;