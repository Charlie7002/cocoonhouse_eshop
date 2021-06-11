import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import { HomePage, AboutPage, CartPage, ErrorPage, PrivateRoute, CheckoutPage, ProductsPage, SingleProductPage } from "./pages";

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/about" exact>
					<AboutPage />
				</Route>
				<Route path="/checkout" exact>
					<CheckoutPage />
				</Route>
				<Route path="/cart" exact>
					<CartPage />
				</Route>
				<Route path="/products" exact>
					<ProductsPage />
				</Route>
				<Route path="/products/:id" children={<SingleProductPage />}>
					<SingleProductPage />
				</Route>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
