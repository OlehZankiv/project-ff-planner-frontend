import styled, { css, useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { OpacityButton, Text } from '../../../components'
import { PlusCircleIcon } from '../../../assets/icons'

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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    padding: 25px 8px 25px 20px;
    border-radius: 12px;

    background: ${colors.content};
    border: 1px solid ${colors.calendarBorder};
  `}
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
