import { Text } from '../../../../components/Text'
import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { useTranslation } from 'react-i18next'

const PeriodTypeSelect = ({ }) => {
    
    const { t } = useTranslation();
    const { colors } = useTheme()

    return (
        <ChooseCalendarTypeWrapper>
         <MonthButton>
            <Text type='p' color={colors.primary} >
              {t('Month')}
            </Text>
          </MonthButton >
          <DayButton >
            <Text type='p' color={colors.primary}>
              {t('Day')}
            </Text>
            </DayButton>
            </ChooseCalendarTypeWrapper>
    )
}


 const ChooseCalendarTypeWrapper = styled.div`
    height: 34px;
})}
        `

const MonthButton = styled.button`
  ${({ theme: { colors } }) => css`
  background-color: ${colors.tabButtonActive}; 
   color: ${colors.primary};
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
  `}
`


const DayButton = styled.button`
  ${({ theme: { colors } }) => css`
  background-color: ${colors.inactiveToolbarBtnBg}; 
   color: ${colors.primary};
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
  `}
`




export default PeriodTypeSelect