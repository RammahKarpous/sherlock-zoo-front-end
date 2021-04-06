import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import MobileNavigation from "./components/navigation/MobileNavigation";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />

				<Switch>
					<Route exact path="/" component={() => <Home />} />
				</Switch>

				<MobileNavigation />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
