import { Link } from "react-router-dom";
import bristolLogo from "../../assets/images/logo-bristol.svg";
import { links } from "./links";

const Navigation = () => {
	return (
		<nav>
			<div className="container mx-auto flex justify-center md:justify-between items-center">
				<img src={bristolLogo} alt="logo" />

				<ul className="hidden md:flex items-center">
					{links.map((link, i) => (
						<li key={i}>
							<Link className="py-4 px-5 inline-block" to={link.to}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
