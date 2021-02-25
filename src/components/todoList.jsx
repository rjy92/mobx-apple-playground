import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class TodoList extends Component {
	render() {
		const { filterTodos, todoSatusChange } = this.props.todo;
		return (
			<div>
				<section className="main">
					<input className="toggle-all" type="checkbox" />
					<ul className="todo-list">
						{filterTodos.map((todo, i) => {
							return (
								<li
									className={todo.isCompleted ? "completed" : ""}
									key={todo.index}
								>
									<div className="view">
										<label>紅蘋果-{todo.index}號 :🍎{todo.weight}克</label>
										<button
											onClick={() => todoSatusChange(todo.index, true)}
											className="destroy"
										>吃掉</button>
									</div>
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		);
	}
}

export default TodoList;
