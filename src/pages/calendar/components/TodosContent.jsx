import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { TodoCategory } from './TodoCategory'
import { getBreakpointsStyles } from '../../../styles/breakpoints'

export const TodosContent = ({ selectedDate }) => {
  console.log(selectedDate)

  const todoCategories = useMemo(
    () =>
      [{ type: 'to-do' }, { type: 'in-progress' }, { type: 'done' }].map((category, i) => ({
        ...category,
        todos: [
          {
            id: i,
            title: 'wake up & finnaly do something',
            assignedUser: {},
            priority: 'low',
          },
          {
            id: i + 1,
            title: 'wake up & finnaly do something',
            assignedUser: {},
            priority: 'medium',
          },
          {
            id: i + 2,
            title: 'wake up & finnaly do something',
            assignedUser: {},
            priority: 'high',
          },
        ],
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
