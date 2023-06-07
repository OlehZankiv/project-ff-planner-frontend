import styled, { css } from 'styled-components'
import { useBreakpointValue, getBreakpointsStyles } from '../../../styles/breakpoints'

export const CalendarWeek = () => {
  const mon = useBreakpointValue({
    desktopValue: 'mon',
    tabletValue: 'mon',
    mobileValue: 'm',
  })
  const tue = useBreakpointValue({
    desktopValue: 'tue',
    tabletValue: 'tue',
    mobileValue: 't',
  })
  const wed = useBreakpointValue({
    desktopValue: 'wed',
    tabletValue: 'wed',
    mobileValue: 'w',
  })
  const thu = useBreakpointValue({
    desktopValue: 'thu',
    tabletValue: 'thu',
    mobileValue: 't',
  })
  const fri = useBreakpointValue({
    desktopValue: 'fri',
    tabletValue: 'fri',
    mobileValue: 'f',
  })
  const sat = useBreakpointValue({
    desktopValue: 'sat',
    tabletValue: 'sat',
    mobileValue: 's',
  })
  const sun = useBreakpointValue({
    desktopValue: 'sun',
    tabletValue: 'sun',
    mobileValue: 's',
  })

  const days = [
    {
      id: '1',
      value: mon,
    },
    {
      id: '2',
      value: tue,
    },
    {
      id: '3',
      value: wed,
    },
    {
      id: '4',
      value: thu,
    },
    {
      id: '5',
      value: fri,
    },
    {
      id: '6',
      value: sat,
    },
    {
      id: '7',
      value: sun,
    },
  ]

  return (
    <WeekWrapper>
      <WeekList>
        {days.map(({ id, value }) => (
          <WeekItem key={id}>
            <WeekDay>{value}</WeekDay>
          </WeekItem>
        ))}
      </WeekList>
    </WeekWrapper>
  )
}

const WeekWrapper = styled.div`
  width: 100%;
  ${getBreakpointsStyles({
    desktop: css`
      min-height: 46px;
      padding: 32px 32px 0px;
    `,
    tablet: css`
      min-height: 46px;
      padding: 32px 32px 0px;
    `,
    mobile: css`
      min-height: 50px;
      padding: 24px 20px 0px;
    `,
  })}
`

const WeekList = styled.ul`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style: none;
    border: 1px solid ${colors.calendarBorder};
    border-radius: 8px;
    background: ${colors.content};
  `}
`

const WeekItem = styled.li`
  ${({ theme: { colors } }) => css`
    cursor: pointer;
    :hover {
      opacity: 0.85;
    }
    &:nth-last-child(-n + 2) div {
      color: ${colors.primary};
    }
    ${getBreakpointsStyles({
      desktop: css`
        padding-top: 14px;
        padding-bottom: 14px;
      `,
      tablet: css`
        padding-top: 14px;
        padding-bottom: 14px;
      `,
      mobile: css`
        padding-top: 16px;
        padding-bottom: 16px;
      `,
    })}
  `}
`

const WeekDay = styled.div`
  ${({ theme: { colors } }) => css`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${colors.secondaryButtonText};
  `}
`
