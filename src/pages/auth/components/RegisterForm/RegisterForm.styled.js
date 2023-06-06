import styled, { css } from 'styled-components'
import { Field, Form } from 'formik'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'

export const Title = styled.h1`
  ${({ theme: { colors, shadows } }) => css`
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: ${colors.primary};
    text-shadow: ${shadows.titleShadow};

    ${getBreakpointsStyles({
      desktop: css`
        margin-bottom: 40px;
        font-size: 24px;
      `,
      tablet: css`
        margin-bottom: 40px;
        font-size: 24px;
      `,
    })}
  `}
`

export const FormStyled = styled(Form)`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    padding: 40px 24px 40px 24px;
    border-radius: 8px;
    background-color: ${colors.background};

    ${getBreakpointsStyles({
      desktop: css`
        padding: 40px;
      `,
      tablet: css`
        padding: 40px;
      `,
    })}
  `}
`

export const InputField = styled(Field)`
  ${({ theme: { colors } }) => css`
    margin-bottom: 24px;
    padding: 14px;
    width: 287px;
    height: 46px;
    border-radius: 8px;
    border: 1px solid ${colors.border};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.text};

    ${getBreakpointsStyles({
      desktop: css`
        margin-bottom: 18px;
        padding: 18px;
        width: 400px;
        height: 54px;
        font-size: 16px;
      `,
      tablet: css`
        margin-bottom: 18px;
        padding: 18px;
        width: 400px;
        height: 54px;
        font-size: 16px;
      `,
    })}
  `}
`
export const ErrorMessageStyled = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    bottom: 0;
    color: ${colors.textRed};
    font-size: 12px;
    line-height: 14px;
    margin-left: 8px;
  `}
`

export const NameOfFieldStyled = styled.div`
  ${({ theme: { colors } }) => css`
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.background};

    ${getBreakpointsStyles({
      desktop: css`
        font-size: 14px;
        line-height: 17px;
      `,
      tablet: css`
        font-size: 14px;
        line-height: 17px;
      `,
    })}
  `}
`

export const LabelStyled = styled.label`
  position: relative;
`
