import React, { Component } from "react";

type TodoItem = {
  key: number;
  text: string;
};

type TodoItemsProps = {
  entries: TodoItem[];
  delete: (key: number) => void;
};

class TodoItems extends Component<TodoItemsProps> {
  constructor(props: TodoItemsProps) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item: TodoItem) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key: number) {
    this.props.delete(key);
  }

  render() {
    const todoEntries = this.props.entries;
    console.log("TodoEntries: ", todoEntries);
    const listItems = todoEntries.map(this.createTasks);

    return (
      <div className="text-center flex flex-col items-center">
        <h5 className="pb-4">Number of entries: {todoEntries.length}</h5>
        {todoEntries.length > 0 && (
          <ul className="m-2 p-1 bg-blue-50 w-3/4 ">
            {todoEntries.map((item, index) => (
              <div key={index} className="p-1 m-1 bg-blue-50 border-blue-100 rounded-4">
              <li key={index}>
                <span className="flex space-x-4 pe-2 ">
                {index + 1}:  <h5 className="px-1">{listItems[index]}</h5>
                </span>
              </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TodoItems;
