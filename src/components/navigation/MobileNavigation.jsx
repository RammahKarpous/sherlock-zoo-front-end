import { useState } from 'react';
import { Link } from "react-router-dom";
import { links } from "./links";

const MobileNavigation = () => {

	const [isShowing, setIsShowing] = useState(false);

	const showMenu = () => {
		setIsShowing(!isShowing);
	};

	return (
		<nav className="fixed bottom-0 w-full z-10">
			<ul className="flex lg:hidden w-full justify-between bg-body-default">
				{links.slice(0, 3).map((link, i) => (
					<li key={i} className="w-1/4">
						<Link className="p-5 inline-block w-full text-center" to={link.to}>
							{link.name}
						</Link>
					</li>
				))}

				<li className="bg-green-button p-5 w-1/4 text-center" onClick={() => showMenu()}>
					More
					<ul className={`
						fixed flex-col bg-white bottom-20 flex right-4 w-40 shadow-lg rounded-md transition duration-75
						${isShowing ? 'opacity-100 visible right-4' : 'opacity-0 invisible right-0'} 
					`}>
						{links.slice(3, 7).map((link, i) => (
							<li key={i} className="w-full">
								<Link
									className="p-5 inline-block w-full text-left"
									to={link.to}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavigation;
