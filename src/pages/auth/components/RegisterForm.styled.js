import styled, { css } from 'styled-components'
import { Form } from 'formik'
import { getBreakpointsStyles } from '../../../styles/breakpoints'

export const FormStyled = styled(Form)`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 335px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    padding: 40px 24px 40px 24px;
    border-radius: 8px;
    background-color: ${colors.background};

    ${getBreakpointsStyles({
      desktop: css`
        padding: 40px;
        width: 480px;
      `,
      tablet: css`
        padding: 40px;
        width: 480px;
      `,
    })}
  `}
`
