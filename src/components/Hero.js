import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
	return (
		<Wrapper className="section-center">
			<article className="content">
				<h1>
					Design your
					<br />
					comfort zone
				</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur non omnis pariatur assumenda voluptatibus dignissimos, laudantium, doloribus eius unde repudiandae quod alias laborum tempora excepturi vel officiis, praesentium vero?</p>
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
