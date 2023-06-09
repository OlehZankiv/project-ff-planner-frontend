import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { NextMonthIcon } from '../../../../assets/icons/NextMonthIcon'
import { PrevMonthIcon } from '../../../../assets/icons/PrevMonthIcon'
import dayjs from 'dayjs'

const PeriodPaginator = ({
  selectedDate,
  isPrevMonthDisabled,
  isPrevDayDisabled,
  handleNextMonth,
  handlePrevMonth,
  calendarType,
  handleNextWeek,
  handlePrevWeek,
}) => {
  const { colors } = useTheme()
 

  const isPeriodMonth = calendarType === 'month'

  const month = dayjs(selectedDate).format('MMMM YYYY').toUpperCase()
  const day = dayjs(selectedDate).format('D MMM YYYY').toUpperCase()

  return (
    <AlignItemsWrapper>
      <MonthWrapper>
        {calendarType === 'month' && <MonthText>{month}</MonthText>}
        {calendarType === 'day' && <DayText>{day}</DayText>
        }
      </MonthWrapper>

     

      <IconsWrapper>
        <PrevMonthIconButton
          onClick={isPeriodMonth ? handlePrevMonth : handlePrevWeek}
          disabled={isPeriodMonth ? isPrevMonthDisabled : isPrevDayDisabled}
        >
          {isPeriodMonth ? (
            <PrevMonthIcon
               width={11}
                height={11}
              color={isPrevMonthDisabled ? colors.placeholderColor : colors.icon}
            ></PrevMonthIcon>
          ) : (
            <PrevMonthIcon
              color={isPrevDayDisabled ? colors.placeholderColor : colors.icon}
            ></PrevMonthIcon>
          )}
        </PrevMonthIconButton>
        <NextMonthIconButton onClick={isPeriodMonth ? handleNextMonth : handleNextWeek}>
          <NextMonthIcon width={11} height={11} color={colors.icon}></NextMonthIcon>
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
    background-color: ${colors.arrowIconsBgColor};
    width: 36px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 8px 0px 0px 8px;
    border: none;
    border-right: 1px solid rgba(220, 227, 229, 0.5);
    color: ${colors.white};
    text-align: center;
    border: 1px solid rgba(220, 227, 229, 0.5);
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
    background-color: ${colors.arrowIconsBgColor};
    width: 36px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid rgba(220, 227, 229, 0.5);
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
