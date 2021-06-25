import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
	const { cart, clearCart } = useCartContext();
	return (
		<Wrapper className="section section-center">
			<CartColumns />
			{cart.map((item, i) => {
				return <CartItem key={`${item.id}${i}`} {...item} />;
			})}
			<hr />
			<div className="link-container">
				<Link to="/products" className="link-btn">
					Back to products
				</Link>
				<button type="button" className="link-btn clear-btn" onClick={clearCart}>
					Clear shopping cart
				</button>
			</div>
			<CartTotals />
		</Wrapper>
	);
};
const Wrapper = styled.section`
	.link-container {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}
	.link-btn {
		background: transparent;
		border-color: transparent;
		text-transform: capitalize;
		padding: 0.25rem 0.5rem;
		background: var(--clr-grey-2);
		color: var(--clr-white);
		border-radius: var(--radius);

		font-weight: 400;
		cursor: pointer;
	}
	.clear-btn {
		background: var(--clr-clear);
	}
`;
export default CartContent;
