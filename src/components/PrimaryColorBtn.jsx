import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../styles/breakpoints'
import { lightTheme } from '../styles/theme/themes'

export const PrimaryColorBtn = ({ children, isDefaultShadow = false }) => {
  return <PrimaryBtn isDefaultShadow={isDefaultShadow}>{children}</PrimaryBtn>
}

const PrimaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.colors.primary};
  ${(prop) => prop.isDefaultShadow && `box-shadow: ${lightTheme.shadows.btnShadow};`}
  border-radius: 16px;
  border: none;
  padding: 8px 20px;
  gap: 6px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  &:focus {
    background: ${lightTheme.colors.primaryBtnHover};
    box-shadow: ${lightTheme.shadows.btnShadow};
  }

  ${getBreakpointsStyles({
    tablet: css`
      padding: 12px 32px;
    `,
    desktop: css`
      padding: 12px 32px;
    `,
  })}
`
