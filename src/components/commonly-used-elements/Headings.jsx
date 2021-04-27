const Heading = ({ text, colour, extraClasses, weight, size, level }) => {
	let Tag = 'h' + level;

	return (
		<Tag className={`
			text-${colour} 
			font-${weight} 
				${size === 'small' && 'text-small'}
				${size === 'medium' && 'text-small sm:text-medium md:text-large'}
				${size === 'large' && 'text-medium xl:text-large'}
			mb-2 
			leading-tight
			${extraClasses}`}>
				
			{text}
		</Tag>
	);
};

Heading.defaultProps = {
	level: '3',
	size: 'medium',
	text: 'Add some text. use text="" prop.',
	colour: 'green-dark',
	extraClasses: '',
	weight: 'bold'
}

export default Heading;