import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../../styles/breakpoints'
import { useTasks } from '../../../hooks/query'
import { TodoCategory } from './TodoCategory'

export const TodosContent = ({ selectedDate }) => {
  const { tasks } = useTasks()
  console.log(selectedDate)

  const todoCategories = useMemo(
    () =>
      [{ type: 'to-do' }, { type: 'in-progress' }, { type: 'done' }].map((category) => ({
        ...category,
        todos: tasks.filter((task) => task.category === category.type),
      })),
    [tasks],
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

  overflow-x: auto;

  ${getBreakpointsStyles({
    desktop: css`
      & > * {
        width: calc(${100 / 3}% - 26px * 2 / 3);
      }
    `,
    tablet: css`
      & > * {
        min-width: calc(50vw - ((28px * 2) / 3) - ((28px * 2) / 3) - 18px);
      }
    `,
    mobile: css`
      & > * {
        min-width: calc(100vw - 24px - 24px);
      }
    `,
  })}
`
