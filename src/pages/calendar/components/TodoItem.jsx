import styled, { css, useTheme } from 'styled-components'
import { Avatar, OpacityButton, OptionsDropdown, TaskModal, Text } from '../../../components'
import { ArrowCircleIcon, PencilIcon, TrashIcon } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useDeleteTask, useUpdateTask } from '../../../hooks/query'

const TodoItemStatus = ({ priority }) => {
  const { t } = useTranslation()

  const priorityText = {
    low: t('Low'),
    medium: t('Medium'),
    high: t('High'),
  }

  return (
    <PriorityWrapper priority={priority}>
      <Text type='h4' fontSize={10} lineHeight={12} color='white'>
        {priorityText[priority]}
      </Text>
    </PriorityWrapper>
  )
}

export const TodoItem = ({ title, priority, assignedUser, id, ...rest }) => {
  const [isEditVisible, setEditVisible] = useState(false)
  const { updateCategory } = useUpdateTask(id)
  const { deleteTask } = useDeleteTask()
  const { t } = useTranslation()
  const { colors } = useTheme()

  return (
    <>
      <Wrapper>
        <Text
          type='p'
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {title}
        </Text>
        <BottomSide>
          <AvatarWrapper>
            <Avatar size={32} image={assignedUser.avatar} name={assignedUser.name} />
            <TodoItemStatus priority={priority} />
          </AvatarWrapper>
          <Actions>
            <OptionsDropdown
              options={[
                {
                  type: 'to-do',
                  title: t('To do'),
                  onClick: () => updateCategory('to-do'),
                },
                {
                  type: 'in-progress',
                  title: t('In progress'),
                  onClick: () => updateCategory('in-progress'),
                },
                {
                  type: 'done',
                  title: t('Done'),
                  onClick: () => updateCategory('done'),
                },
              ].filter((category) => category.type !== rest.category)}
              renderOption={({ title, onClick }) => (
                <OptionWrapper onClick={onClick}>
                  <Text type='h6' fontSize={14}>
                    {title}
                  </Text>
                  <ArrowCircleIcon color={colors.text} />
                </OptionWrapper>
              )}
              onShowClassName='show'
            >
              <ArrowCircleIcon color={colors.text} />
            </OptionsDropdown>
            <OpacityButton onClick={() => setEditVisible(true)}>
              <PencilIcon color={colors.text} />
            </OpacityButton>
            <OpacityButton onClick={() => deleteTask(id)}>
              <TrashIcon color={colors.text} />
            </OpacityButton>
          </Actions>
        </BottomSide>
      </Wrapper>
      <TaskModal
        selectedDate={rest.startAt}
        category={rest.category}
        updateValues={{ ...rest, title, id, priority }}
        visible={isEditVisible}
        setVisible={setEditVisible}
      />
    </>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 14px;
    background-color: ${colors.mainBackground};
    border: 1px solid ${colors.modalsInputBorder};
    border-radius: 8px;
    overflow: hidden;
  `}
`

const OptionWrapper = styled(OpacityButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`

const BottomSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 32px;
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 8px;
`

const Actions = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;

    .show {
      svg path {
        stroke: ${colors.primary} !important;
      }
    }
  `}
`

const PriorityWrapper = styled.div`
  ${({ theme: { colors }, priority }) => css`
    padding: 4px 12px;
    border-radius: 4px;
    background-color: ${colors[priority]};
  `}
`
