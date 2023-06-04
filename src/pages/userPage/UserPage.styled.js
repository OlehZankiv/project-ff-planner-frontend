import styled, { css } from 'styled-components'

import { getBreakpointsStyles } from '../../styles/breakpoints'

export const UserWrapper = styled.div`
  width: calc(100% - 20px);
  min-height: 474px;
  margin-top: 151px;
  background-color: white;
  color: white;
  justify-content: center;
  border-radius: 16px;
  ${getBreakpointsStyles({
    desktop: css`
      background-color: blue;
    `,
    tablet: css`
      background-color: green;
    `,
  })}
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${getBreakpointsStyles({
    desktop: css`
      background-color: blue;
    `,
    tablet: css`
      background-color: green;
    `,
  })}
`

export const ImageAvatar = styled.img`
  border-radius: 50%;
  margin-top: -40px;
  margin-bottom: -60px;
  width: 72px;
  height: 72px;
  background-color: gray;
  border: 2px solid #3e85f3;
  margin-bottom: 14px;
`
export const NameText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  color: #343434;
  text-align: center;
  margin-bottom: 4px;
`
export const UserText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: #343434;
  text-align: center;
  margin-bottom: 40px;
`
export const InputText = styled.p`
  /* width: 74px;
  height: 18px; */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  color: #343434;
  text-align: center;
  margin-top: 14px;
`
export const InputLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: #343434;
  text-align: center;
  margin-left: 5px;
`
export const UserForm = styled.form`
  width: calc(100% - 36px);
  margin: 0 auto;
`
export const DivForm = styled.div`
  margin-bottom: 10px;
`
export const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  padding-left: 14px;
  margin-bottom: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1, 29;
  color: #343434;
  margin-top: 8px;
`
export const UserButton = styled.button`
  width: 195px;
  height: 46px;
  background: #3e85f3;
  border: #3e85f3;
  border-radius: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  display: block;
  margin: auto;
  margin-top: 40px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
