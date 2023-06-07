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
    tablet: css``,
    desktop: css``,
  })}
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
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

  ${getBreakpointsStyles({
    tablet: css`
      margin-top: 40px;
      margin-bottom: 14px;
      width: 124px;
      height: 124px;
    `,
    desktop: css`
      width: 124px;
      height: 124px;
    `,
  })}
`
export const BackgroundSvg = styled.a`
  background-color: #3e85f3;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  translate: -30px 22px;
  ${getBreakpointsStyles({
    tablet: css`
      width: 24px;
      height: 24px;
      translate: -50px 144px;
    `,
    desktop: css`
      width: 24px;
      height: 24px;
      translate: -50px 68px;
    `,
  })}
`
export const AddSvg = styled.svg`
  width: 14px;
  height: 14px;

  ${getBreakpointsStyles({
    tablet: css`
      width: 24px;
      height: 24px;
    `,
    desktop: css`
      width: 24px;
      height: 24px;
    `,
  })}
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
  ${getBreakpointsStyles({
    tablet: css`
      font-size: 18px;
      line-height: 1;
    `,
    desktop: css``,
  })}
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
  ${getBreakpointsStyles({
    tablet: css`
      font-size: 14px;
      line-height: 1.29;
    `,
    desktop: css``,
  })}
`

export const UserForm = styled.form`
  width: calc(100% - 36px);
  margin: 0 auto;
  ${getBreakpointsStyles({
    tablet: css`
      width: 374px;
    `,
    desktop: css`
      width: 768px;
    `,
  })}
`
export const DivForm = styled.div`
  margin-bottom: 10px;
  ${getBreakpointsStyles({
    desktop: css`
      display: flex;
      flex-wrap: wrap;
      column-gap: 50px;
    `,
  })}
`
export const InputWrapper = styled.div`
  ${getBreakpointsStyles({
    desktop: css`
      width: 354px;
    `,
  })}
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
  ${getBreakpointsStyles({
    tablet: css`
      width: 262px;
    `,
    desktop: css`
      margin-bottom: 60px;
    `,
  })}
`
