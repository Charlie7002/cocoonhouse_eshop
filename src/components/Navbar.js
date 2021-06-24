import React from "react";
import styled from "styled-components";
import logo from "../assets/logoch_row.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
	const { openSidebar } = useProductsContext();
	const { myUser } = useUserContext();
	return (
		<NavContainer>
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="Coocon House" />
					</Link>
					<button type="button" className="nav-toggle" onClick={openSidebar}>
						<RiMenu3Fill />
					</button>
				</div>
				<ul className="nav-links">
					{links.map((link) => {
						const { id, url, text } = link;
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						);
					})}
					{myUser && (
						<li>
							<Link to="/checkout">Checkout</Link>
						</li>
					)}
				</ul>
				<CartButtons />
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;

	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			height: 88px;
			margin-top: 24px;
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--darkgreen-2);
		cursor: pointer;
		svg {
			font-size: 2rem;
		}
	}
	.nav-links {
		display: none;
	}
	.cart-btn-wrapper {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-toggle {
			display: none;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			margin-top: 1rem;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--clr-grey-3);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid var(--clr-grey-44);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

export default Nav;
