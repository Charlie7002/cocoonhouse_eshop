import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
	return (
		<Wrapper>
			<div className="section-center">
				<Link to="/">Home</Link>
				{product && <Link to="/products">/ Products</Link>}/ {title}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--lightyellow);
	width: 100%;
	min-height: 10vh;
	display: flex;
	align-items: center;
	margin-top: 1.1rem;
	color: var(--grey-1);
	a {
		color: var(--darkgreen-2);
		padding: 0.5rem;
		transition: var(--transition);
	}
	a:hover {
		color: var(--darkgreen-1);
	}
`;

export default PageHero;
