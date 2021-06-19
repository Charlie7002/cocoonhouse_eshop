import { LOAD_PRODUCTS, SET_LISTVIEW, SET_GRIDVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from "../actions";

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		let maxPrice = action.payload.map((p) => p.price);
		maxPrice = Math.max(...maxPrice);

		// utiliser ...action.payload pour que ca ne pointe au même endroit de memoire (on copie/colle)== en js bananas
		return { ...state, all_products: [...action.payload], filtered_products: [...action.payload], filters: { ...state.filters, max_price: maxPrice, price: maxPrice } };
	}

	if (action.type === SET_GRIDVIEW) {
		return { ...state, grid_view: !state.grid_view };
	}

	if (action.type === UPDATE_SORT) {
		return { ...state, sort: action.payload };
	}

	if (action.type === SORT_PRODUCTS) {
		const { sort, filtered_products } = state;
		let tempProducts = [...filtered_products];
		if (sort === "price-lowest") {
			tempProducts.sort((a, b) => a.price - b.price);
		}
		if (sort === "price-highest") {
			tempProducts.sort((a, b) => b.price - a.price);
		}
		if (sort === "name-a") {
			//alt way:
			// tempProducts.sort((a,b)=>{return a.name.localeCompare(b.name)})
			tempProducts.sort((a, b) => (a.name < b.name ? -1 : 1));
		}
		if (sort === "name-z") {
			tempProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
		}
		return { ...state, filtered_products: tempProducts };
	}

	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload;

		return { ...state, filters: { ...state.filters, [name]: value } };
	}

	if (action.type === FILTER_PRODUCTS) {
		console.log("je filtre de ouf");
		return state;
	}

	if (action.type === CLEAR_FILTERS) {
		console.log("clear");
		return {
			...state,
			filters: {
				...state.filters,
				text: "",
				company: "all",
				category: "all",
				colors: "all",
				price: state.filters.max_price,
				shipping: false
			}
		};
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
