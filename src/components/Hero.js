import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/b1.jpg";
import heroBcg2 from "../assets/c1.jpg";

const Hero = () => {
	return (
		<Wrapper className="section-center">
			<article className="content">
				<h1>
					Design your
					<br />
					comfort zone
				</h1>
				<p>Furniture lover, choose from our range of furniture to dress up any room in your home: office furniture, bathroom furniture, or dining room furniture. Install garden or balcony furniture for a cozy and urban "Rooftop" atmosphere, or nature and wilderness for an adventure.</p>
				<Link to="/products" className="btn hero-btn">
					Shop now
				</Link>
			</article>
			<article className="img-container">
				<img src={heroBcg} alt="nice table" className="main-img" />
				<img src={heroBcg2} alt="nice people" className="accent-img" />
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}

	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--grey-4);
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: 20px;
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: -1rem;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: 1.5rem;
		}
		.img-container::before {
			content: "";
			position: absolute;
			width: 130%;
			height: 104%;
			background: var(--lightgreen-1);
			bottom: -14%;
			left: -27%;
			border-radius: 50%;
		}
	}
`;

export default Hero;
