import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import MobileNavigation from "./components/navigation/MobileNavigation";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import AnimalsPage from "./pages/animals/AnimalsPage";
import AnimalPage from "./pages/animals/AnimalPage";
import Contact from "./pages/contact/Contact";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/animals" component={AnimalsPage} />
					<Route exact path="/animal/:id" component={AnimalPage} />
					<Route exact path="/contact-us" component={Contact} />
				</Switch>

				<MobileNavigation />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
