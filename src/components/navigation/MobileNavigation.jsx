import { Link } from "react-router-dom";
import { links } from "./links";

const MobileNavigation = () => {
	const showMenu = () => {
		console.log("Hello world");
	};

	return (
		<nav className="fixed bottom-0 w-full z-10">
			<ul className="flex md:hidden w-full justify-between bg-body-default">
				{links.slice(0, 3).map((link, i) => (
					<li key={i} className="w-1/4">
						<Link className="p-5 inline-block w-full" to={link.to}>
							{link.name}
						</Link>
					</li>
				))}

				<li className="bg-green-button p-5 w-1/4" onClick={() => showMenu()}>
					More
					<ul className="fixed flex-col bg-white bottom-20 right-4 flex w-40 shadow-lg rounded-md duration-75">
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
