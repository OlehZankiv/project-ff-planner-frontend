import styled, { css } from 'styled-components'
import { getMobileStyles, useBreakpointValue } from '../../../styles/breakpoints'
import { useTranslation } from 'react-i18next'
import { OpacityButton, Text } from '../../../components' // use for day

export const CalendarWeek = ({ selectedDate, isDayView }) => {
  const { t } = useTranslation()

  const Monday = useBreakpointValue({
    desktopValue: t('Monday').slice(0, 3),
    tabletValue: t('Monday').slice(0, 3),
    mobileValue: t('Monday').slice(0, 1),
  })
  const Tuesday = useBreakpointValue({
    desktopValue: t('Tuesday').slice(0, 3),
    tabletValue: t('Tuesday').slice(0, 3),
    mobileValue: t('Tuesday').slice(0, 1),
  })
  const Wednesday = useBreakpointValue({
    desktopValue: t('Wednesday').slice(0, 3),
    tabletValue: t('Wednesday').slice(0, 3),
    mobileValue: t('Wednesday').slice(0, 1),
  })
  const Thursday = useBreakpointValue({
    desktopValue: t('Thursday').slice(0, 3),
    tabletValue: t('Thursday').slice(0, 3),
    mobileValue: t('Thursday').slice(0, 1),
  })
  const Friday = useBreakpointValue({
    desktopValue: t('Friday').slice(0, 3),
    tabletValue: t('Friday').slice(0, 3),
    mobileValue: t('Friday').slice(0, 1),
  })
  const Saturday = useBreakpointValue({
    desktopValue: t('Saturday').slice(0, 3),
    tabletValue: t('Saturday').slice(0, 3),
    mobileValue: t('Saturday').slice(0, 1),
  })
  const Sunday = useBreakpointValue({
    desktopValue: t('Sunday').slice(0, 3),
    tabletValue: t('Sunday').slice(0, 3),
    mobileValue: t('Sunday').slice(0, 1),
  })

  const days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday].map((day) => ({
    text: day,
    date: new Date(),
  }))
  console.log(selectedDate)
  return (
    <WeekList>
      {days.map(({ text }, index) => (
        <WeekDay key={index} disabled={!isDayView} onClick={isDayView ? () => {} : undefined}>
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
            <WeekNumberWrapper selected={index === 0}>
              <Text
                style={{ textTransform: 'uppercase' }}
                type='h4'
                color={index === 0 ? 'white' : 'userNameText'}
                mobileStyles={css`
                  font-size: 16px;
                `}
              >
                {index}
              </Text>
            </WeekNumberWrapper>
          )}
        </WeekDay>
      ))}
    </WeekList>
  )
}

const WeekList = styled.section`
  ${({ theme: { colors } }) => css`
    display: flex;
    margin-bottom: 16px;
    justify-content: space-around;
    list-style: none;
    padding: 10px;
    border: 1px solid ${colors.calendarBorder};
    border-radius: 8px;
    background: ${colors.content};
  `}
`

const WeekDay = styled(OpacityButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
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
