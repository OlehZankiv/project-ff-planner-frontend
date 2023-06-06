import styled, { css } from "styled-components";
import {
    useBreakpointValue,
} from '../../../styles/breakpoints';

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
          const sut = useBreakpointValue({
    desktopValue: 'sut',
    tabletValue: 'sut',
    mobileValue: 's',
          })
          const sun = useBreakpointValue({
    desktopValue: 'sun',
    tabletValue: 'sun',
    mobileValue: 's',
  })
    return (
        <WeekWrapper>
            <WeekList>
                <WeekItem>
                    <WeekDay>{mon}</WeekDay>
                </WeekItem>
                <WeekItem>
                    <WeekDay>{tue}</WeekDay>
                </WeekItem>
                <WeekItem>
                    <WeekDay>{wed}</WeekDay>
                </WeekItem>
                <WeekItem>
                    <WeekDay>{thu}</WeekDay>
                </WeekItem>
                <WeekItem>
                    <WeekDay>{fri}</WeekDay>
                </WeekItem>
                <WeekItem>
                    <WeekDay>{sut}</WeekDay>
                </WeekItem>
                <WeekItem>
                    <WeekDay>{sun}</WeekDay>
                </WeekItem>
            </WeekList>
        </WeekWrapper>
    )
}

const WeekWrapper = styled.div`
${({ theme: { colors } }) => css`
max-width: 100%;
    max-height: 46px;
    background: ${colors.background};
    border: ${colors.calendarBorderDefault};
    border-radius: 8px;
    `}
`;

const WeekList = styled.ul`
    display: flex;
    justify-content: space-around;
        padding: 0;
    margin: 0;
    list-style: none;
`

const WeekItem = styled.li`
${({ theme: { colors } }) => css`
 padding-top: 14px;
    padding-bottom: 14px;
    &:nth-last-child(-n + 2) div {
    color: ${colors.primary};
}`}
   
`

const WeekDay = styled.div`
${({ theme: { colors } }) => css`
    cursor: pointer;
font-weight: 600;
font-size: 16px;
line-height: 18px;
text-transform: uppercase;
color: ${colors.secondaryButtonText};`}
    
`