import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class AddTodo extends Component {
	addTodo() {
		const { todoAdd } = this.props.todo;
		todoAdd(Math.floor(Math.random() * 1000));
	}

	render() {
		const { isLoading } = this.props.todo;
		return (
			<div>
				<header className="header">
					<h1>苹果篮子</h1>
					<div
						style={{
              textAlign: "center",
              color: '#fff'
						}}
					>
						<button
							style={{
								width: 150,
								height: 40,
								backgroundColor: "#489364",
                borderRadius: 20,
                cursor: 'pointer'
							}}
							onClick={this.addTodo.bind(this)}
						>
							{isLoading ? '摘苹果中...': '摘苹果'}
						</button>
					</div>
				</header>
			</div>
		);
	}
}

export default AddTodo;
