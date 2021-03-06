import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { LOAD_PRODUCTS, SET_GRIDVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from "../actions";
import { useProductsContext } from "./products_context";
import { RiAuctionLine } from "react-icons/ri";

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: true,
	sort: "price-lowest",
	filters: {
		text: "",
		company: "all",
		category: "all",
		colors: "all",
		min_price: 0,
		max_price: 0,
		price: 0,
		shipping: false
	}
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const { products } = useProductsContext();

	const [state, dispatch] = useReducer(reducer, initialState);

	const changeView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const updateSort = (e) => {
		dispatch({ type: UPDATE_SORT, payload: e.target.value });
	};

	const updateFilters = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		name === "price" && (value = Number(value));
		name === "shipping" && (value = e.target.checked);

		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTERS });
	};

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	useEffect(() => {
		dispatch({ type: FILTER_PRODUCTS });
		dispatch({ type: SORT_PRODUCTS });
	}, [products, state.sort, state.filters]);

	return <FilterContext.Provider value={{ ...state, changeView, updateSort, updateFilters, clearFilter }}>{children}</FilterContext.Provider>;
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
