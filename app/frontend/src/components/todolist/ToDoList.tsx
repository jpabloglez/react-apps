/**
 * TODO List application
 * - Reference: https://github.com/nazaninsbr/React-TodoList
 */

import React, { Component, FormEvent, ReactElement } from "react";
import TodoItems from "./ToDoItems";

type TodoItem = {
  text: string;
  key: number;
};

type TodoListState = {
  items: TodoItem[];
};

class TodoList extends Component<{}, TodoListState> {
  private _inputElement: HTMLInputElement | null = null;

  constructor(props: {}) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e: FormEvent): void {
    e.preventDefault();
    if (this._inputElement && this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
      }));

      this._inputElement.value = "";
    }
  }

  deleteItem(key: number): void {
    const filteredItems = this.state.items.filter((item) => item.key !== key);

    this.setState({
      items: filteredItems,
    });
  }

  render(): ReactElement {
    return (
      <div className="todoListMain min-h-screen bg-white rounded m-2">
        <div className="header text-green-700 p-4 m-4">
          <form onSubmit={this.addItem}>
            <input
              className="rounded-lg p-2 m-2 border-2 w-1/2 border-green-300 bg-green-100 italic"
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter a new task"
            />
            <button className="rounded-lg p-2 m-2  border-2 border-green-300 bg-green-100 justify-content items-center" type="submit">
              <span className="flex items-center">
                {/* Add a + icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
          </form>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
