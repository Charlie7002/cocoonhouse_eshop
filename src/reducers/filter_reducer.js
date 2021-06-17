import { LOAD_PRODUCTS, SET_LISTVIEW, SET_GRIDVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from "../actions";

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		// utiliser ...action.payload pour que ca ne pointe au même endroit de memoire (on copie/colle)== en js bananas
		return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] };
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

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
