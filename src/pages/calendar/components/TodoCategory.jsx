import styled, { css, useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, OpacityButton, TaskModal, Text } from '../../../components'
import { PlusCircleIcon, PlusIcon } from '../../../assets/icons'
import { TodoItem } from './TodoItem'
import { getMobileStyles } from '../../../styles/breakpoints'
import { useState } from 'react'

export const TodoCategory = ({
  showWithoutModalNextTime,
  setShowWithoutModalNextTime,
  type,
  selectedDate,
  todos,
}) => {
  const { colors } = useTheme()
  const { t } = useTranslation()

  const [isTaskModalVisible, setTaskModalVisible] = useState(false)

  const titles = {
    'to-do': t('To do'),
    'in-progress': t('In progress'),
    done: t('Done'),
  }

  return (
    <Wrapper>
      <Text type='h5' fontSize={20} lineHeight={24}>
        {titles[type]}
      </Text>
      <TodosWrapper>
        {todos.map((todo) => (
          <TodoItem
            setShowWithoutModalNextTime={setShowWithoutModalNextTime}
            showWithoutModalNextTime={showWithoutModalNextTime}
            {...todo}
            key={todo.id}
          />
        ))}
      </TodosWrapper>
      <PlusCircleIconButton onClick={() => setTaskModalVisible(true)}>
        <PlusCircleIcon color={colors.text} />
      </PlusCircleIconButton>

      <BottomButton>
        <Button
          buttonTextProps={{ style: { color: colors.text } }}
          style={{
            color: colors.text,
            border: `1px dashed ${colors.primary}`,
            backgroundColor: colors.taskButtonBackground,
          }}
          leftIcon={<PlusIcon color={colors.text} />}
          fullWidth
          title={t('Add task')}
          onClick={() => setTaskModalVisible(true)}
        />
      </BottomButton>
      <TaskModal
        selectedDate={selectedDate}
        visible={isTaskModalVisible}
        setVisible={setTaskModalVisible}
        category={type}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    height: fit-content;
    padding: 25px 8px 25px 20px;
    border-radius: 12px;

    background: ${colors.content};
    border: 1px solid ${colors.calendarBorder};
  `}
`

const BottomButton = styled.div`
  padding-right: 12px;
  margin-top: 32px;
`

const TodosWrapper = styled.div`
  margin-top: 34px;
  padding-right: 12px;
  max-height: 40vh;
  overflow-y: auto;

  > div {
    margin-top: 18px;
  }

  > div:first-child {
    margin-top: 0;
  }

  ${getMobileStyles(css`
    max-height: 50vh;
  `)}
`

const PlusCircleIconButton = styled(OpacityButton)`
  position: absolute;
  top: 24px;
  right: 24px;
`
