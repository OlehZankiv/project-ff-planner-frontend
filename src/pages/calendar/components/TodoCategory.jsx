import styled, { css, useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, OpacityButton, Text } from '../../../components'
import { PlusCircleIcon, PlusIcon } from '../../../assets/icons'

export const TodoCategory = ({ type, todos }) => {
  const { colors } = useTheme()
  const { t } = useTranslation()

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
      <TodosWrapper>{todos}</TodosWrapper>
      <PlusCircleIconButton onClick={() => {}}>
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
        />
      </BottomButton>
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
`

const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 34px;
`

const PlusCircleIconButton = styled(OpacityButton)`
  position: absolute;
  top: 24px;
  right: 24px;
`
