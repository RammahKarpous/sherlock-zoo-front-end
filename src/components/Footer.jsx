import { Link } from "react-router-dom";
import Heading from "./commonly-used-elements/Headings";
import ContactInfo from "./ContactInfo";
import { links } from "./navigation/links";
import Input from './form-elements/Input';

const Footer = () => {
	return (
		<div className="bg-green-dark">
			<footer className="container m-auto text-left px-7 py-16 lg:flex lg:justify-between md:mb-0">
				<section className="sm:flex sm:gap-20">
					<article>
						<Heading text="Quick Links" colour="white" size="small" />

						<nav>
							<ul>
								{links.map((link, i) => (
									<li key={i}>
										<Link className="text-white py-2 block" to={link.to}>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</article>

					<ContactInfo colour="white" />
				</section>

				<form className="max-w-sm md:w-96">
					<Heading text="Newsletter" colour="white" size="small" extraClasses="mt-10 md:mt-0" />

					<div className="mt-2 mb-3">
						<Input type="email" text="Email address" name="email" labelColour="text-white" />
					</div>

					<input
						type="submit"
						value="Subscribe"
						className="bg-button-primary py-3 px-8 rounded-md"
					/>
				</form>
			</footer>

			<section className="bg-green-darker">
				<div className="container px-7 m-auto py-5 flex justify-between">
					<p className="text-white">&copy; Copyright - Sherlock Zoo 2021</p>
					<Link className="text-white" to="/references">
						Images references
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Footer;
