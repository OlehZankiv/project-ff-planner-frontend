import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { NextMonthIcon } from '../../../../assets/icons/NextMonthIcon'
import { PrevMonthIcon } from '../../../../assets/icons/PrevMonthIcon'
// import { Text } from '../../../../components'
// import { useState } from 'react'
// import { useTranslation } from 'react-i18next'


const PeriodPaginator = ({month, year, isPrevMonthDisabled, handleNextMonth, handlePrevMonth}) => {

     const { colors } = useTheme()


const MonthName = () => {
          switch (month) {
            case 0:
             return ('January'.toUpperCase())
            case 1:
             return ('February'.toUpperCase())
            case 2:
              return ('March'.toUpperCase())
              case 3:
              return('April'.toUpperCase())
              case 4:
              return('May'.toUpperCase())
              case 5:
              return('June'.toUpperCase())
              case 6:
              return('July'.toUpperCase())
              case 7:
              return('August'.toUpperCase())
              case 8:
              return('September'.toUpperCase())
              case 9:
              return('October'.toUpperCase())
              case 10:
              return('November'.toUpperCase())
              case 11:
              return('December'.toUpperCase())  
    }}

const NamedMonth = MonthName()
  

    return (
         <AlignItemsWrapper>
          <MonthWrapper>
            <MonthText>{NamedMonth}  {year}</MonthText>
          </MonthWrapper>
          <IconsWrapper>
            <PrevMonthIconButton onClick={handlePrevMonth} disabled={isPrevMonthDisabled}>
              <PrevMonthIcon width={11} height={11} color={isPrevMonthDisabled ? colors.placeholderColor: colors.icon} ></PrevMonthIcon>
          </PrevMonthIconButton>
            <NextMonthIconButton   onClick={handleNextMonth}  color={colors.icon}>
              <NextMonthIcon width={11} height={11} color={colors.icon} ></NextMonthIcon>
            </NextMonthIconButton>
          </IconsWrapper>
        </AlignItemsWrapper>
    )
}


const MonthWrapper = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    margin-bottom: 18px;  
    background-color: ${colors.primary};
    box-shadow: ${shadows.modalShadow};
    border-radius: 8px;
 width: 118px; 
    height: 30px; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    border-radius: 8px;
  ${getBreakpointsStyles({
  tablet: css`
     width: 135px; 
    height: 34px;
    `,
  desktop: css`
     width: 135px; 
    height: 34px; 
      `,
})}
  `}
`

const AlignItemsWrapper = styled.div`
    display: flex;
      ${getBreakpointsStyles({
  tablet: css`
        align-items: start;
     `,
  desktop: css`
       align-items: start;
       `,
})}
`

const MonthText = styled.p`
  ${({ theme: { colors } }) => css`
font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.white};
  text-align: center;    
  ${getBreakpointsStyles({
  tablet: css`
   font-size: 16px;
    `,
  desktop: css`
   font-size: 16px;
      `,
})}
  `}
`



const PrevMonthIconButton = styled.button`
  ${({ theme: { colors } }) => css`
 display: flex;
    background-color: ${colors.white};
    width: 36px;
    height: 30px;
    align-items: center;    
    justify-content: center;
   border-radius: 8px 0px 0px 8px;
   border: none;
    border-right: 1px solid rgba(220, 227, 229, 0.5);
  color: ${colors.white};
  text-align: center;    
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
  `}
`

const NextMonthIconButton = styled.button`
  ${({ theme: { colors } }) => css`
  display: flex;
    background-color: ${colors.white};
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
  `}
`




 const IconsWrapper = styled.div`
    display: flex;
    height: 30px;
     ${getBreakpointsStyles({
  tablet: css`
    margin-left: 8px;
    height: 34px;
     `,
  desktop: css`
    margin-left: 8px;
    height: 34px;
         `,
})}
`




 export default PeriodPaginator