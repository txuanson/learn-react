import React, { useState } from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import TodoList from './components/todo/TodoList';
import ITodo from './models/Todo.model';
import { v4 } from 'uuid';

function App() {

  const [textInput, setTextInput] = useState("")
  const [todoList, setTodo] = useState<Array<ITodo>>([])

  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value)
  }

  const onAddTodoClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTodo([
      {
        id: v4(), name: textInput, isCompleted: false
      },
      ...todoList
    ])
    setTextInput("")
  }

  const onTodoCheckClick = (id: string) => {
    setTodo(prevState => 
      prevState.map(todo => 
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
      ))
  }

  return (
    <>
      <h3>Danh sách việc cần làm</h3>
      <Textfield
        value={textInput}
        onChange={onTextInputChange}
        name='add-todo'
        placeholder='Thêm việc cần làm'
        elemAfterInput={
          <Button isDisabled={!textInput} onClick={onAddTodoClick}>Add Todo</Button>
        }
      />
      <TodoList todoList={todoList} onTodoCheckClick={onTodoCheckClick}/>
    </>
  );
}

export default App;