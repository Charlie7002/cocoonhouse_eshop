import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import { HomePage, AuthWrapper, AboutPage, CartPage, ErrorPage, PrivateRoute, CheckoutPage, ProductsPage, SingleProductPage } from "./pages";

function App() {
	return (
		<AuthWrapper>
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
					<PrivateRoute path="/checkout" exact>
						<CheckoutPage />
					</PrivateRoute>
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
		</AuthWrapper>
	);
}

export default App;
