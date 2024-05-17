import React, { useState } from "react";
import styled from "styled-components";
import { clickAnimation } from "../styles/animate";
import { addGoal } from "../store/goalsSlice";
import { useDispatch } from 'react-redux'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid var(--c-primary-2);
	border-radius: 32px;
	padding: 5px 10px;
	background-color: var(--c-white);
	box-shadow: var(--c-primary-2) 1.95px 1.95px;
	transform: translateY(1rem);
`;
const Input = styled.input`
	border: none;
	outline: none;
	padding: 10px;
	font-size: 16px;
	background-color: transparent;
	width: 90%;
`;
const Button = styled.button`
	border: none;
	border-radius: 50%;
	width: 4.8rem;
	height: 4.8rem;
	background-color: var(--c-primary);
	color: white;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	transition: background-color 0.1s ease-in;
	&:hover {
		background-color: var(--c-primary-hv);
	}
	&:active {
		animation: ${clickAnimation} 0.2s ease;
	}
`;

const AddingGoal = () => {

	const [goalInput, setGoalInput] = useState('')
	const dispatch = useDispatch()

	const handleAddGoal = () => {
		dispatch(addGoal({name: goalInput}))
		setGoalInput('')
	};

	return (
		<Container>
			<Input value={goalInput} onChange={(e) => setGoalInput(e.target.value)} placeholder="Add your goal ..." />
			<Button onClick={handleAddGoal}>+</Button>
		</Container>
	);
};

export default AddingGoal;
