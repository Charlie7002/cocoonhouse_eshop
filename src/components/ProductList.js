import React from "react";
import { useFilterContext } from "../context/filter_context";
import { products_url } from "../utils/constants";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const { filtered_products, grid_view } = useFilterContext();
	if (filtered_products.length < 1) {
		return <h5 style={{ textTransform: "none" }}> Sorry, no products matched your search.</h5>;
	}
	if (grid_view) {
		return <GridView filtered_products={filtered_products}>product list</GridView>;
	}
	return <ListView filtered_products={filtered_products} />;
};

export default ProductList;
