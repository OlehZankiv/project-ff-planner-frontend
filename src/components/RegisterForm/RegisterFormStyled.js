import styled, { css } from 'styled-components'
import { Field, Form } from 'formik'
import { getDesktopStyles, getTabletStyles } from '../../styles/breakpoints'

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: ${colors.primaryColor};
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    ${getTabletStyles(css`
      margin-bottom: 40px;
      font-size: 24px;
    `)}

    ${getDesktopStyles(css`
      margin-bottom: 40px;
      font-size: 24px;
    `)}
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

    ${getTabletStyles(css`
      padding: 40px;
    `)}

    ${getDesktopStyles(css`
      padding: 40px;
    `)}
  `}
`

export const Input = styled(Field)`
  ${({ theme: { colors } }) => css`
    margin-bottom: 24px;
    padding: 14px;
    width: 287px;
    height: 46px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.background};

    ${getTabletStyles(css`
      margin-bottom: 18px;
      padding: 18px;
      width: 400px;
      height: 54px;
      font-size: 16px;
    `)}

    ${getDesktopStyles(css`
      margin-bottom: 18px;
      padding: 18px;
      width: 400px;
      height: 54px;
      font-size: 16px;
    `)}
  `}
`
export const ErrorMessageStyled = styled.div`
  position: absolute;
  bottom: 0;
  color: #da1414;
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;
`

export const NameOfFieldStyled = styled.div`
  ${({ theme: { colors } }) => css`
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.background};

    ${getTabletStyles(css`
      font-size: 14px;
      line-height: 17px;
    `)}

    ${getDesktopStyles(css`
      font-size: 14px;
      line-height: 17px;
    `)}
  `}
`

export const LabelStyled = styled.label`
  position: relative;
`
