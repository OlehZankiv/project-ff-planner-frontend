import styled, { css, useTheme } from 'styled-components'
import { OpacityButton, OptionsDropdown, Text } from '../../../components'
import { ArrowCircleIcon, PencilIcon, TrashIcon } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'

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

export const TodoItem = ({ title, priority }) => {
  const { t } = useTranslation()
  const { colors } = useTheme()

  return (
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
          <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: 'red' }} />
          <TodoItemStatus priority={priority} />
        </AvatarWrapper>
        <Actions>
          <OptionsDropdown
            options={[
              { title: t('In progress'), onClick: () => {} },
              { title: t('Done'), onClick: () => {} },
            ]}
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
          <OpacityButton>
            <PencilIcon color={colors.text} />
          </OpacityButton>
          <OpacityButton>
            <TrashIcon color={colors.text} />
          </OpacityButton>
        </Actions>
      </BottomSide>
    </Wrapper>
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
