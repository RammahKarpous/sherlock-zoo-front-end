import { Link } from "react-router-dom";

const Button = ({ to, text, type, extraStyling }) => {
	return (
		<Link
			to={to}
			className={`px-8 py-3 inline-block bg-button-${type} rounded-md ${extraStyling}`}>
				{text}
		</Link>
	);
};

export default Button;
