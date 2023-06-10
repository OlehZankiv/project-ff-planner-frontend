import { Text } from '../../../../components/Text'
import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { useTranslation } from 'react-i18next'

const PeriodTypeSelect = ({ calendarType, changeCalendarType }) => {
  const { t } = useTranslation()
  const { colors } = useTheme()

  const isPeriodMonth = calendarType === 'month'
  const isPeriodDay = calendarType === 'day'

  return (
    <div>
      <MonthButton
        onClick={() => changeCalendarType('month')}
        isActive={isPeriodMonth }
      >
        <Text type='p' color={colors.primary}>
          {t('Month')}
        </Text>
      </MonthButton>
      <DayButton onClick={() => changeCalendarType('day')} isActive={isPeriodDay }>
        <Text type='p' color={colors.primary}>
          {t('Day')}
        </Text>
      </DayButton>
    </div>
  )
}

const MonthButton = styled.button`
  ${({ theme: { colors }, isActive }) => css`
    background-color: ${isActive ? colors.primary : colors.toolbarBtnBgColor};
    color: ${isActive ? colors.white : colors.tabContentSelected};
    width: 76px;
    height: 34px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    border-right: 1px solid ${colors.primary};
    ${getBreakpointsStyles({
      tablet: css`
        width: 82px;
        height: 34px;
      `,
      desktop: css`
        width: 82px;
        height: 34px;
      `,
    })}
  `}
`

const DayButton = styled.button`
  ${({ theme: { colors }, isActive }) => css`
    background-color: ${isActive ? colors.primary : colors.toolbarBtnBgColor};
    color: ${isActive ? colors.white : colors.tabContentSelected};
    width: 76px;
    height: 34px;
    border-radius: 0px 8px 8px 0px;
    border: none;
    ${getBreakpointsStyles({
      tablet: css`
        width: 76px;
        height: 34px;
      `,
      desktop: css`
        width: 76px;
        height: 34px;
      `,
    })}
  `}
`

export default PeriodTypeSelect
