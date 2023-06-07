import styled, { css } from 'styled-components'
import { Form } from 'formik'
import { getBreakpointsStyles } from '../../styles/breakpoints'

export const AuthWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondaryBackground};
  `}
`

export const AuthFormStyled = styled(Form)`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: calc(100% - 40px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    padding: 40px 24px 40px 24px;
    border-radius: 8px;
    background-color: ${colors.background};

    ${getBreakpointsStyles({
      desktop: css`
        padding: 40px;
        width: 30%;
        min-width: 400px;
      `,
      tablet: css`
        padding: 40px;
        width: 80vw;
      `,
    })}
  `}
`
