import React from 'react'
import Button from '@atlaskit/button'
import ITodo from '../../models/Todo.model'
import CheckIcon from '@atlaskit/icon/glyph/check'
import styled, { css } from 'styled-components'

const StyledButton = styled(Button) <{ isCompleted: boolean }>`
    margin-top: 5px;
  text-align: left;
  &,
  &:hover {
    ${(p) =>
    p.isCompleted &&
    css`
        text-decoration: line-through;
      `}
  }
  &:hover {
    .check-icon {
      display: inline-block;
    }
  }
  .check-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`


export default function Todo({ todo, onTodoCheckClick }: { todo: ITodo, onTodoCheckClick: any }) {
  return (
    <StyledButton
      isCompleted={todo.isCompleted}
      shouldFitContainer
      iconAfter={
        !todo.isCompleted && (
          <span className='check-icon' onClick={() => onTodoCheckClick(todo.id)}>
            <CheckIcon label='' primaryColor='#4fff4f' />
          </span>
        )
      }
    >
      {todo.name}
    </StyledButton>
  )
}
