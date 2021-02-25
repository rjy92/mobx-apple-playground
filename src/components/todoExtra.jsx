import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class TodoExtra extends Component {
	render() {
		const { filterTodos, unEatUpsWeight, eatUpCount, eatUpWeight } = this.props.todo;
		return (
			<div>
				<footer className="footer">
					<div className="todo-count">
					  当前：
						<p><strong>{filterTodos.length}个苹果， 共{unEatUpsWeight}克</strong></p>
					</div>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<div>
					  已吃：
						<p><strong>{eatUpCount.length}个苹果， 共{eatUpWeight}克</strong></p>
					</div>
				</footer>
			</div>
		);
	}
}

export default TodoExtra;
