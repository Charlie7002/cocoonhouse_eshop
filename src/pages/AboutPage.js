import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/b3.jpg";

const AboutPage = () => {
	return (
		<main>
			<PageHero title="About" />
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="hero" />
				<article>
					<h2>Our story</h2>
					<div className="underline"></div>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut autem placeat consequatur ipsa dolorem assumenda tenetur, eos commodi sapiente earum accusantium omnis sit voluptatibus praesentium tempora in, obcaecati rem esse!</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--grey-1);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
