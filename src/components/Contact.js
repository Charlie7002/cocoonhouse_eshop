import React from "react";
import styled from "styled-components";

const Contact = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<h3>Join our newsletter and get 10% off</h3>
				<div className="content">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis inventore molestias error laborum ratione eveniet quisquam. Veniam quia maxime iure minima sint enim quis, unde vitae, voluptate veritatis ea placeat?</p>
					<form className="contact-form">
						<input type="email" className="form-input" placeholder="Enter you email" />
						<button type="submit" className="submit-btn">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	padding: 5rem 0;
	h3 {
		text-transform: none;
	}
	p {
		line-height: 2;
		max-width: 45em;
		color: var(--clr-grey-5);
	}
	.contact-form {
		width: 90vw;
		max-width: 500px;
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.form-input,
	.submit-btn {
		font-size: 0.8rem;
		padding: 0.5rem 1rem;
	}
	.form-input {
		color: var(--clr-grey-3);
		background: var(--lightgreen-1);
		outline: none;
		border: hidden;
		border-radius: 0.15rem;
	}
	.submit-btn {
		border: none;
	}
	.form-input::placeholder {
		color: var(--clr-black);
		text-transform: capitalize;
		border: none;
	}
	.submit-btn {
		background: var(--darkgreen-1);
		text-transform: capitalize;
		cursor: pointer;
		transition: var(--transition);
		color: var(--clr-white);
		border-radius: 0.1rem;
		border: 3px solid var(--lightgreen-1);
	}
	.submit-btn:hover {
		color: var(--clr-white);
	}
	@media (min-width: 992px) {
		.content {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: 8rem;
			margin-top: 2rem;
		}
		p {
			margin-bottom: 0;
		}
	}
	@media (min-width: 1280px) {
		padding: 15rem 0;
	}
`;

export default Contact;
