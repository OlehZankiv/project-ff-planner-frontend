import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { NextMonthIcon } from '../../../../assets/icons/NextMonthIcon'
import { PrevMonthIcon } from '../../../../assets/icons/PrevMonthIcon'
import dayjs from 'dayjs'

const PeriodPaginator = ({
  selectedDate,
  setSelectedDate,
  calendarType,
}) => {
  const { colors } = useTheme()

  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();

  const isPrevMonthDisabled = currentYear === selectedYear && currentMonth === selectedMonth

  const isPrevDayDisabled = selectedDate - new Date() < 0
 
  const isPeriodMonth = calendarType === 'month'

  const formattedMonth = dayjs(selectedDate).format('MMMM YYYY').toUpperCase()
  const formattedDay = dayjs(selectedDate).format('D MMM YYYY').toUpperCase()

    const handlePrevMonth = () => {
    if (selectedDate - new Date() < 0) {
      return
    }
    const subtractedMonth = dayjs(selectedDate).subtract(1, 'month')
    setSelectedDate(subtractedMonth.$d)
  }

  const handleNextMonth = () => {
    const addedMonth = dayjs(selectedDate).add(1, 'month')
    setSelectedDate(addedMonth.$d)
  }

  const handleNextWeek = () => {
    const addedWeek = dayjs(selectedDate).add(7, 'day')
    setSelectedDate(addedWeek.$d)
  }

  const handlePrevWeek = () => {
    if (selectedDate - new Date() < 0) {
      return
    }
    const substractedWeek = dayjs(selectedDate).subtract(7, 'day')
    setSelectedDate(substractedWeek.$d)
  }


  return (
    <AlignItemsWrapper>
      <MonthWrapper>
        {calendarType === 'month' && <MonthText>{formattedMonth}</MonthText>}
        {calendarType === 'day' && <DayText>{formattedDay}</DayText>
        }
      </MonthWrapper>
      <IconsWrapper>
        <PrevMonthIconButton
          onClick={isPeriodMonth ? handlePrevMonth : handlePrevWeek}
          disabled={isPeriodMonth ? isPrevMonthDisabled : isPrevDayDisabled}
        >
            <PrevMonthIcon
               size={11}
              color={isPeriodMonth && isPrevMonthDisabled || isPrevDayDisabled? colors.placeholderColor : colors.icon}
            ></PrevMonthIcon>
        </PrevMonthIconButton>
        <NextMonthIconButton onClick={isPeriodMonth ? handleNextMonth : handleNextWeek}>
          <NextMonthIcon size={11} color={colors.icon}></NextMonthIcon>
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
    min-width: 111px;
    height: 30px;
    padding-right: 3px;
    padding-left: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    ${getBreakpointsStyles({
      tablet: css`
        min-width: 145px;
        height: 34px;
      `,
      desktop: css`
        min-width: 145px;
        height: 34px;
      `,
    })}
  `}
`

const AlignItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const DayText = styled.p`
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
    background-color: ${colors.scrollbarTrackBackground};
    height: fit-content;
    padding: 9px 12px;
    align-items: center;
    justify-content: center;
    border-radius: 8px 0px 0px 8px;
    border: none;
    border-right: 1px solid  ${colors.placeholderColor};
    color: ${colors.white};
    text-align: center;
    border: 1px solid ${colors.placeholderColor} ;
    ${getBreakpointsStyles({
      tablet: css`
        padding: 11px 12px;
      `,
      desktop: css`
      padding: 11px 12px;
      `,
    })}
  `}
`

const NextMonthIconButton = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    background-color: ${colors.scrollbarTrackBackground};
    height: fit-content;
    padding: 9px 12px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid ${colors.placeholderColor};
    ${getBreakpointsStyles({
      tablet: css`
          padding: 11px 12px;
      `,
      desktop: css`
        padding: 11px 12px;
      `,
    })}
  `}
`

const IconsWrapper = styled.div`
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

export default PeriodPaginator
