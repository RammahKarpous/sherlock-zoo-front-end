import { Link } from "react-router-dom";
import Heading from "./commonly-used-elements/Headings";
import { links } from "./navigation/links";

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

					<article>
						<Heading text="Contact info" colour="white" size="small" extraClasses="mt-10 md:mt-0" />

						<div className="text-white">
							<p>Castle Hill, Bristol</p>
							<p className="mb-5">BS1 5JS</p>

							<p>Tel: 0272 123 456</p>
							<p>Mail: info@sherlockzoo.com</p>
						</div>
					</article>
				</section>

				<form className="max-w-sm md:w-96">
					<Heading text="Newsletter" colour="white" size="small" extraClasses="mt-10 md:mt-0" />

					<div className="w-full flex flex-col mb-4">
						<label htmlFor="email" className="text-white mb-2">
							Email address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="p-3 rounded-sm"
						/>
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
