import React from "react";
// import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
	const { closeSidebar } = useProductsContext();
	const { total_items, clearCart } = useCartContext();
	const { loginWithRedirect, myUser, logout } = useUserContext();
	return (
		<Wrapper className="cart-btn-wrapper">
			<Link to="/cart" className="cart-btn" onClick={closeSidebar}>
				<span className="cart-container">
					<BsBag />
					<span className="cart-value">{total_items}</span>
				</span>
				<small>Cart</small>
			</Link>
			{myUser ? (
				<button
					type="button"
					className="auth-btn"
					onClick={() => {
						clearCart();
						logout({
							returnTo: window.location.origin
						});
					}}
				>
					<AiOutlineUser />
					<small>Logout</small>
				</button>
			) : (
				<button type="button" className="auth-btn" onClick={() => loginWithRedirect()}>
					<AiOutlineUser />
					<small>Login</small>
				</button>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 225px;

	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1.5rem;
		/* letter-spacing: var(--spacing); */
		color: var(--clr-grey-1);
		display: flex;
		flex-direction: column;
		align-items: center;
		small {
			font-size: 0.8rem;
		}
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 1.6rem;
			margin-left: 5px;
		}
	}
	.cart-value {
		position: absolute;
		top: -10px;
		right: -16px;
		background: var(--lightgreen-1);
		border: 1px solid var(--darkgreen-1);
		width: 15px;
		height: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.75rem;
		color: var(--darkgreen-2);
		padding: 12px;
	}
	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		small {
			font-size: 0.8rem;
			font-family: "poppins";
		}
		svg {
			margin-left: 5px;
		}
	}
`;
export default CartButtons;
