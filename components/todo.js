import React from "react";
import styled from 'styled-components'


const TodoDiv = styled.div`
	align-items: center;
	background: #fff;
	border-radius: 3px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
	display: flex;
	font-size: 12px;
	justify-content: space-between;
	margin-bottom: 10px;
	padding: 5px 10px;

	@media (max-width: 600px) {
    	flex-direction: column;
		align-items: flex-start;
  	}
`


const TodoSpanText = styled.span`

	@media (min-width: 600px) {
		max-width: 500px;
		overflow-wrap: anywhere;
  	}

	@media (max-width: 425px) {
		/* max-width: 500px; */
		overflow-wrap: anywhere;
  	}
`


export default function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <TodoDiv style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >
            <TodoSpanText>
                {todo.text}
            </TodoSpanText>

            <div>
                <button onClick={() => completeTodo(index)} style={{ marginRight: 5 }}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </TodoDiv>
    );
};