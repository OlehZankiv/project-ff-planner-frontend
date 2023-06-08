import styled, { css } from 'styled-components'
import { useBreakpointValue, getBreakpointsStyles, getMobileStyles } from '../../../styles/breakpoints'
import { useState } from 'react' // use for day

export const CalendarWeek = () => {
  const [currentDay, setCurrentDay] = useState(true); // use for day

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
      {/* month */}

      {/* <WeekList>
        {days.map(({ id, value }) => (
          <WeekItem key={id}>
            <WeekDay>{value}</WeekDay>
          </WeekItem>
        ))}
      </WeekList> */}

      {/* day */}

            <WeekList>
        {days.map(({ id, value }) => (
          <WeekItem key={id} onClick={() => setCurrentDay(prev => !prev)}>
            <WeekDay>{value}</WeekDay>
            <WeekDayNum className={currentDay ? " selected" : undefined}>1</WeekDayNum>
          </WeekItem>
        ))}
      </WeekList>
    </WeekWrapper>
  )
}

/* month */

// const WeekWrapper = styled.div`
//   width: 100%;
//   ${getBreakpointsStyles({
//     desktop: css`
//       min-height: 46px;
//       padding: 32px 32px 0px;
//     `,
//     tablet: css`
//       min-height: 46px;
//       padding: 32px 32px 0px;
//     `,
//     mobile: css`
//       min-height: 50px;
//       padding: 24px 20px 0px;
//     `,
//   })}
// `

// const WeekList = styled.ul`
//   ${({ theme: { colors } }) => css`
//     display: flex;
//     justify-content: space-around;
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     border: 1px solid ${colors.calendarBorder};
//     border-radius: 8px;
//     background: ${colors.content};
//   `}
// `

// const WeekItem = styled.li`
//   ${({ theme: { colors } }) => css`
//     cursor: pointer;
//     :hover {
//       opacity: 0.85;
//     }
//     &:nth-last-child(-n + 2) div {
//       color: ${colors.primary};
//     }
//     ${getBreakpointsStyles({
//       desktop: css`
//         padding-top: 14px;
//         padding-bottom: 14px;
//       `,
//       tablet: css`
//         padding-top: 14px;
//         padding-bottom: 14px;
//       `,
//       mobile: css`
//         padding-top: 16px;
//         padding-bottom: 16px;
//       `,
//     })}
//   `}
// `

// const WeekDay = styled.div`
//   ${({ theme: { colors } }) => css`
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 18px;
//     text-transform: uppercase;
//     color: ${colors.secondaryButtonText};
//   `}
// `

/* day */

const WeekWrapper = styled.div`
  width: 100%;
  ${getBreakpointsStyles({
    desktop: css`
      min-height: 68px;
      padding: 32px 32px 0px;
    `,
    tablet: css`
      min-height: 68px;
      padding: 32px 32px 0px;
    `,
    mobile: css`
      min-height: 74px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
    cursor: pointer;
    :hover {
      opacity: 0.85;
    }
    ${getBreakpointsStyles({
      desktop: css`
        padding-top: 10px;
        padding-bottom: 10px;
      `,
      tablet: css`
        padding-top: 10px;
        padding-bottom: 10px;
      `,
      mobile: css`
        padding-top: 14px;
        padding-bottom: 14px;
      `,
    })}
`

const WeekDay = styled.div`
  ${({ theme: { colors } }) => css`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${colors.secondaryButtonText};
  `}
  ${getBreakpointsStyles({
    desktop: css`
      padding-bottom: 4px;
    `,
    tablet: css`
      padding-bottom: 4px;
    `,
    mobile: css`
      padding-bottom: 6px;
    `,
  })}
`

const WeekDayNum = styled.div`
  ${({ theme: { colors } }) => css`
    width: 26px;
    height: 26px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: ${colors.secondaryButtonText};
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;

    &.selected {
      background-color: ${colors.primary};
      color: ${colors.white};
    }

    ${getMobileStyles(css`
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 14px;
    `)}
  `}
`