import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { TodoCategory } from './TodoCategory'
import { getBreakpointsStyles } from '../../../styles/breakpoints'

export const TodosContent = ({ selectedDate }) => {
  console.log(selectedDate)

  const todoCategories = useMemo(
    () =>
      [{ type: 'to-do' }, { type: 'in-progress' }, { type: 'done' }].map((category) => ({
        ...category,
        todos: [],
      })),
    [],
  )

  return (
    <Wrapper>
      {todoCategories.map((category) => (
        <TodoCategory key={category.type} {...category} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 26px;
  height: 100%;

  overflow: auto;

  & > * {
    flex-basis: ${100 / 3}%;
  }

  ${getBreakpointsStyles({
    tablet: css`
      & > * {
        max-height: 80%;
        min-width: calc(50vw - ((28px * 2) / 3) - ((28px * 2) / 3) - 26px);
      }
    `,
    mobile: css`
      & > * {
        max-height: 90%;
        min-width: calc(100vw - 24px - 24px);
      }
    `,
  })}
`
