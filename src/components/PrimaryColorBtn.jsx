import styled, { css } from 'styled-components'

import { getBreakpointsStyles } from '../styles/breakpoints'
import { lightTheme, darkTheme } from '../styles/theme/themes'

export const PrimaryColorBtn = ({ children, isDefaultShadow = false, theme }) => {
  return (
    <PrimaryBtn isDefaultShadow={isDefaultShadow} theme={theme}>
      {children}
    </PrimaryBtn>
  )
}

const PrimaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) =>
    prop.theme === 'light' ? lightTheme.colors.primary : darkTheme.colors.primary};
  ${(prop) =>
    prop.isDefaultShadow &&
    `box-shadow: ${
      prop.theme === 'light' ? lightTheme.shadows.btnShadow : darkTheme.shadows.btnShadow
    };`}
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
    background: ${(prop) =>
      prop.theme === 'light'
        ? lightTheme.colors.primaryBtnHover
        : darkTheme.colors.primaryBtnHover};
    box-shadow: ${lightTheme.shadows.btnShadow};
    box-shadow: ${(prop) =>
      prop.theme === 'light' ? lightTheme.shadows.btnShadow : darkTheme.shadows.btnShadow};
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
