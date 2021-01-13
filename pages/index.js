import React from "react";
import Head from 'next/head'
import styled from 'styled-components'
import TodoForm from "../components/todoForm";
import Todo from "../components/todo";

const siteTitle = "Ayodele Todo App"

const AppContainer = styled.div`
	background:  #596c90;
	min-height: 100vh;
	padding: 30px;
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const TodoList = styled.div`
	background: #e8e8e8;
	border-radius: 4px;
	padding: 5px;
	min-width: 400px;
	min-height: 200px;

	@media (max-width: 425px) {
    	min-width: fit-content;
		width: 100%;
  	}
`

const LengthDisplay = styled.span`
	color: #fff;
	padding: 0px 30px;
	align-items: center;
	background: crimson;
	border-radius: 3px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
	margin-bottom: 20px;
	text-align: center;
`

const TimeDisplay = styled.p`
	position: absolute;
	right: 25px;
	top: 0px;
	color: #fff;
	font-weight: 24;
	margin-bottom: 0;
`


function App() {

	const currentDate = new Date();

	// setTodos fxn updates the todos array upon CRUD operation done on the todos array
	const [todos, setTodos] = React.useState([
		{ 	text: "Learn about React",
			isCompleted: false
		},
		{ 	text: "Meet friend for lunch",
			isCompleted: false
		},
		{ 	text: "Build really cool todo app",
			isCompleted: false
		}
	]);

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<AppContainer>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<TimeDisplay>{currentDate.toDateString()}</TimeDisplay>

			<LengthDisplay>You have {todos.length} todo(s)</LengthDisplay>

			<TodoList>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</TodoList>

		</AppContainer>
	);
}

export default App;