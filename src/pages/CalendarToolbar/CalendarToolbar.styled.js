import styled, { css } from 'styled-components'

import { getBreakpointsStyles } from '../../styles/breakpoints'

export const CalendarToolbarWrapper = styled.div`
    background-color: #EAEAEA;
    padding: 30px;
    display: block;
     ${getBreakpointsStyles({
  tablet: css`
    display: flex;
        justify-content: space-between;
    `,
  desktop: css`
    display: flex;
        justify-content: space-between;
    `,
})}
 }
`

export const MonthWrapper = styled.div`
    margin-bottom: 18px;     
    background-color: #3E85F3;
    width: 118px; 
    height: 30px; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    border-radius: 8px;
  ${getBreakpointsStyles({
  tablet: css`
     width: 131px; 
    height: 38px;
    `,
  desktop: css`
     width: 131px; 
    height: 38px; 
      `,
})}
`

export const MonthText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color:#FFFFFF;
  text-align: center;
  ${getBreakpointsStyles({
  tablet: css`
       font-size: 16px;
    `,
  desktop: css`
    font-size: 16px;
    `,
})}
`

export const ChooseCalendarTypeWrapper = styled.div`
    height: 34px;
    ${getBreakpointsStyles({
  tablet: css`
  
    `,
  desktop: css``,
})}
        `

export const MonthButton = styled.button`
    background-color: #CAE8FF; 
    width: 76px;
    height: 34px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
     ${getBreakpointsStyles({
  tablet: css`
      width: 82px;
    height: 34px;
         `,
  desktop: css`
    width: 82px;
    height: 34px;`,
})}
`

export const DayButton = styled.button`
    background-color: #E3F3FF; 
    width: 76px;
    height: 34px;
    border-radius: 0px 8px 8px 0px;
    border: none;
     ${getBreakpointsStyles({
  tablet: css`
    width: 82px;
    height: 34px;`,
  desktop: css`
    width: 82px;
    height: 34px;`,
})}
`

export const PrevMonthIconButton = styled.button`
    display: flex;
    background-color: #FFFFFF;
    width: 36px;
    height: 30px;
    align-items: center;    
    justify-content: center;
   border-radius: 8px 0px 0px 8px;
   border: none;
    border-right: 1px solid rgba(220, 227, 229, 0.5);
      ${getBreakpointsStyles({
  tablet: css`
    
    width: 38px;
    height: 34px;
          `,
  desktop: css`
             
    width: 38px;
    height: 34px;
          `,
})}
`


export const NextMonthIconButton = styled.button`
    display: flex;
    background-color: #FFFFFF;
    width: 36px;
    height: 30px;
    align-items: center;    
    justify-content: center;
    border: none;
    border-radius: 0px 8px 8px 0px;
     ${getBreakpointsStyles({
  tablet: css`
    
    width: 38px;
    height: 34px;
          `,
  desktop: css`
    width: 38px;
    height: 34px;
          `,
})}
`

export const IconsWrapper = styled.div`
    display: flex;
     ${getBreakpointsStyles({
  tablet: css`
    margin-left: 8px;
     `,
  desktop: css`
    margin-left: 8px;
         `,
})}
`

export const AlignItemsWrapper = styled.div`
    display: flex;

      ${getBreakpointsStyles({
  tablet: css`
    justify-content: center;
    aling-items: center
     `,
  desktop: css``,
})}
`