import styled, { css } from 'styled-components'
import { useBreakpointValue, getBreakpointsStyles } from '../../../styles/breakpoints'
import { useAppThemeContext } from '../../../styles/theme/provider'

export const CalendarWeek = () => {
  const { setThemeType } = useAppThemeContext()
  setThemeType('dark')

  // const mon = useBreakpointValue({
  //   desktopValue: 'mon',
  //   tabletValue: 'mon',
  //   mobileValue: 'm',
  // })
  // const tue = useBreakpointValue({
  //   desktopValue: 'tue',
  //   tabletValue: 'tue',
  //   mobileValue: 't',
  // })
  // const wed = useBreakpointValue({
  //   desktopValue: 'wed',
  //   tabletValue: 'wed',
  //   mobileValue: 'w',
  // })
  // const thu = useBreakpointValue({
  //   desktopValue: 'thu',
  //   tabletValue: 'thu',
  //   mobileValue: 't',
  // })
  // const fri = useBreakpointValue({
  //   desktopValue: 'fri',
  //   tabletValue: 'fri',
  //   mobileValue: 'f',
  // })
  // const sut = useBreakpointValue({
  //   desktopValue: 'sut',
  //   tabletValue: 'sut',
  //   mobileValue: 's',
  // })
  // const sun = useBreakpointValue({
  //   desktopValue: 'sun',
  //   tabletValue: 'sun',
  //   mobileValue: 's',
  // })

  const days = [
    {
      id: '1',
      value: useBreakpointValue({ desktopValue: 'mon', tabletValue: 'mon', mobileValue: 'm' }),
    },
    {
      id: '2',
      value: useBreakpointValue({ desktopValue: 'tue', tabletValue: 'tue', mobileValue: 't' }),
    },
    {
      id: '3',
      value: useBreakpointValue({ desktopValue: 'wed', tabletValue: 'wed', mobileValue: 'w' }),
    },
    {
      id: '4',
      value: useBreakpointValue({ desktopValue: 'thu', tabletValue: 'thu', mobileValue: 't' }),
    },
    {
      id: '5',
      value: useBreakpointValue({ desktopValue: 'fri', tabletValue: 'fri', mobileValue: 'f' }),
    },
    {
      id: '6',
      value: useBreakpointValue({ desktopValue: 'sut', tabletValue: 'sut', mobileValue: 's' }),
    },
    {
      id: '7',
      value: useBreakpointValue({ desktopValue: 'sun', tabletValue: 'sun', mobileValue: 's' }),
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
    
    // <WeekWrapper>
    //   <WeekList>
    //     <WeekItem>
    //       <WeekDay>{mon}</WeekDay>
    //     </WeekItem>
    //     <WeekItem>
    //       <WeekDay>{tue}</WeekDay>
    //     </WeekItem>
    //     <WeekItem>
    //       <WeekDay>{wed}</WeekDay>
    //     </WeekItem>
    //     <WeekItem>
    //       <WeekDay>{thu}</WeekDay>
    //     </WeekItem>
    //     <WeekItem>
    //       <WeekDay>{fri}</WeekDay>
    //     </WeekItem>
    //     <WeekItem>
    //       <WeekDay>{sut}</WeekDay>
    //     </WeekItem>
    //     <WeekItem>
    //       <WeekDay>{sun}</WeekDay>
    //     </WeekItem>
    //   </WeekList>
    // </WeekWrapper>
  )
}

const WeekWrapper = styled.div`
  max-width: 100%;
  /* max-height: 46px; */
  /* padding: 0px 32px; */
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
    border: ${colors.calendarBorderDefault};
    border-radius: 8px;
    background: ${colors.content}; !important
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
