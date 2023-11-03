import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

//create your first component
const Home = () => {
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([])
	const handleClick = () => {
		setTodos(prev => [...prev, todo])
		setTodo('')
	}

	return (
		<div className="text-center">
			<h1 className="header">My Todos</h1>
			<input 
				type="text" 
				onChange={(evt) => setTodo(evt.target.value)} 
				value={todo}
				onKeyPress={(evt) => {
					if (evt.key === "Enter") {
						setTodos([todos.concat](todo));
						setTodo("");
					}
				}}
				placeholder="What do you need to do?"  
			/>
			
			<button 
				onClick ={() => setTodos(prev => [...prev,todo])}>
					Send
			</button>
			<ul>
				{todos.map((data, index) => 
					<li key={`${data}-${index}`}>{data} 
						<FontAwesomeIcon icon={faTrashCan} 
							onClick={() => 
								setTodos(todos.filter((data, currentIndex) => index != currentIndex))}/>
					</li>)}
			</ul>
			<div>
				{todos.length} tasks
			</div>
		</div>
	);
};

export default Home;
