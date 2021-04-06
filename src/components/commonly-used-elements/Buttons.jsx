import { Link } from "react-router-dom";

const Button = ({ to, text, type }) => {
	return (
		<Link
			to={to}
			className={`px-8 py-3 inline-block bg-button-${type} rounded-md`}
		>
			{text}
		</Link>
	);
};

export default Button;
