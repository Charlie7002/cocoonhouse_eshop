import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
	const {
		filters: { text, category, company, colors, min_price, max_price, price, shipping },
		updateFilters,
		clearFilter,
		all_products
	} = useFilterContext();

	const categories = getUniqueValues(all_products, "category");
	const companies = getUniqueValues(all_products, "company");
	const color = getUniqueValues(all_products, "colors");

	return (
		<Wrapper>
			<div className="content">
				<form onSubmit={(e) => e.preventDefault()}>
					{/* search */}
					<div className="form-control">
						<input type="text" name="text" placeholder="Search" className="search-input" value={text} onChange={updateFilters} />
					</div>

					{/* category */}
					<div className="form-control">
						<h5>Category</h5>
						<div>
							{categories.map((c, index) => {
								return (
									<button key={index} name="category" onClick={updateFilters} type="button" value={c} className={category === c.toLowerCase() ? "active" : null}>
										{c}
									</button>
								);
							})}
						</div>
					</div>

					{/* company */}
					<div className="form-control">
						<h5>Company</h5>
						<select name="company" value={company} onChange={updateFilters} className="company">
							{companies.map((co, i) => {
								return (
									<option key={i} value={co}>
										{co}
									</option>
								);
							})}
						</select>
					</div>

					{/*Colors */}
					<div className="form-control">
						<h5>Color</h5>
						<div className="colors">
							{color.map((c, i) => {
								if (c === "all") {
									return (
										<button key={i} value="all" name="colors" onClick={updateFilters} className={`all-btn ${colors === "all" && "active"}`}>
											all
										</button>
									);
								}
								return (
									<button key={i} value={c} name="colors" style={{ background: c }} className={`color-btn ${colors === c ? "active" : null}`} onClick={updateFilters}>
										{colors === c && <FaCheck />}
									</button>
								);
							})}
						</div>
					</div>

					{/* price */}
					<div className="form-control">
						<h5>Price</h5>
						<p className="price">{formatPrice(price)}</p>
						<input type="text" type="range" name="price" onChange={updateFilters} min={min_price} max={max_price} value={price} />
					</div>

					{/* shipping */}
					<div className="form-control">
						<input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />
						<label htmlFor="shipping"> Free shipping </label>
					</div>
				</form>
				<button type="button" className="clear-btn" onClick={clearFilter}>
					Clear filters
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
		button,
		p,
		label {
			color: var(--grey-4);
		}
	}
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
	}
	.search-input::placeholder {
		text-transform: capitalize;
	}

	button {
		display: block;
		margin: 0.25em 0;
		padding: 0.25rem 0;
		text-transform: capitalize;
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;

		color: var(--clr-grey-5);
		cursor: pointer;
	}
	.active {
		border-color: var(--clr-grey-5);
	}
	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
	}
	.colors {
		display: flex;
		align-items: center;
	}
	.color-btn {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.5rem;
			color: var(--clr-white);
		}
	}
	.all-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}
	.all-btn .active {
		text-decoration: underline;
	}
	.price {
		margin-bottom: 0.25rem;
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		text-transform: capitalize;
		column-gap: 0.5rem;
		font-size: 1rem;
	}
	.clear-btn {
		background: var(--clr-red-dark);
		color: var(--clr-white);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`;

export default Filters;
