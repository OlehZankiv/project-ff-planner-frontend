import styled, { css } from 'styled-components'
import { OpacityButton } from './OpacityButton'
import { Text } from '../Text'

export const GroupButtons = ({ selected, buttons }) => (
  <Wrapper>
    {buttons.map(({ type, title, onClick, ...button }, i) => (
      <GroupButton
        {...button}
        key={i}
        onClick={() => onClick(type)}
        className={selected === type ? 'selected' : undefined}
      >
        <Text type='p' color='primary' fontSize={16}>
          {title}
        </Text>
      </GroupButton>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: ${colors.groupButtonsBackground};
    overflow: hidden;
  `}
`

const GroupButton = styled(OpacityButton)`
  ${({ theme: { colors } }) => css`
    transition: background 0.2s;
    padding: 8px 16px;
    min-width: 82px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.selected {
      background-color: ${colors.groupButtonsBackgroundSelected};
      & > p {
        color: ${colors.groupButtonsTextSelected};
      }
    }
  `}
`
