import styled, { css } from 'styled-components'
import { getMobileStyles } from '../../../styles/breakpoints'
import { OpacityButton, Text } from '../../../components'
import { useWeekDays } from '../hooks/useWeekDays'
import dayjs from 'dayjs'

export const CalendarWeek = ({ selectedDate, setSelectedDate, isDayView }) => {
  const week = useWeekDays(selectedDate)

  return (
    <WeekList>
      {week.map(({ text, date }, index) => {
        const isSelected = date.getDay() === selectedDate?.getDay()
        const isDisabled = !isDayView || dayjs(date).isBefore(new Date(), 'day')

        return (
          <WeekDay
            key={index}
            disabled={isDisabled}
            onClick={isDisabled ? undefined : () => setSelectedDate(date)}
          >
            <Text
              style={{ textTransform: 'uppercase' }}
              type='h4'
              color='calendarWeekDayText'
              mobileStyles={css`
                font-size: 16px;
              `}
            >
              {text}
            </Text>
            {isDayView && (
              <WeekNumberWrapper selected={isSelected}>
                <Text
                  style={{ textTransform: 'uppercase' }}
                  type='h4'
                  color={isSelected ? 'white' : 'userNameText'}
                  mobileStyles={css`
                    font-size: 16px;
                  `}
                >
                  {date.getDate()}
                </Text>
              </WeekNumberWrapper>
            )}
          </WeekDay>
        )
      })}
    </WeekList>
  )
}

const WeekList = styled.section`
  ${({ theme: { colors } }) => css`
    display: flex;
    margin-bottom: 16px;
    justify-content: space-around;
    list-style: none;
    border: 1px solid ${colors.calendarBorder};
    border-radius: 8px;
    background: ${colors.content};
  `}
`

const WeekDay = styled(OpacityButton)`
  ${({ disabled }) => css`
    opacity: ${disabled ? 0.7 : 1};
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;
    width: calc(100% / 7);
    padding: 10px 5px;
  `}
`

const WeekNumberWrapper = styled.div`
  ${({ selected, theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;

    background: ${selected ? colors.primary : 'transparent'};
    border-radius: 8px;

    ${getMobileStyles(css`
      width: 20px;
      height: 20px;
    `)}
  `}
`
