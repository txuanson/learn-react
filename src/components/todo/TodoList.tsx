import React from 'react'
import ITodo from '../../models/Todo.model'
import Todo from './Todo'

export default function TodoList({ todoList , onTodoCheckClick }: { todoList: Array<ITodo>, onTodoCheckClick: any }) {
  return (
    <>
      {todoList.map(todo =>
        <Todo key={todo.id} todo={todo} onTodoCheckClick={onTodoCheckClick} />
      )}
    </>
  )
}