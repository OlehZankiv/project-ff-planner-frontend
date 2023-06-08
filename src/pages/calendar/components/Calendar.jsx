import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useDimensions } from '../../../hooks'
import styled, { css } from 'styled-components'
import { getBreakpointsStyles, getMobileStyles } from '../../../styles/breakpoints'

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const { height, width } = useDimensions()

  return (
    <CalendarWrapper>
      <FullCalendar
        dayHeaders={false}
        dateClick={(info) => setSelectedDate(info.date)}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={null}
        initialView='dayGridMonth'
        dayCellContent={(props) => (
          <DayCell
            className={
              props.date.toDateString() === selectedDate.toDateString() ? 'selected' : undefined
            }
          >
            {props.dayNumberText}
          </DayCell>
        )}
        events={[
          {
            id: 'awdwdw',
            title: 'All-day event',
            start: selectedDate,
          },
        ]}
        showNonCurrentDates={false}
        fixedWeekCount={false}
        aspectRatio={width / height}
        firstDay={1}
      />
    </CalendarWrapper>
  )
}

const DayCell = styled.div`
  ${({ theme: { colors } }) => css`
    width: 26px;
    height: 26px;
    margin: 14px 14px 0 0;
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
      margin: 8px 4px 0 0;
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 14px;
    `)}
  `}
`

const CalendarWrapper = styled.section`
  ${({ theme: { colors } }) => css`

    table {
      border-radius: 8px;
      border: 1px solid ${colors.calendarBorder} !important;
      overflow: hidden;
    }

    td.fc-day {
      :hover {
        opacity: 0.85;
      }

      :active {
        opacity: 0.7;
      }
    }
  }

  tr.fc-scrollgrid-section > td {
    border: none !important;
  }

  td.fc-day-today,
  td.fc-daygrid-day {
    background-color: ${colors.content} !important;
    border: 1px solid ${colors.calendarBorder};
    cursor: pointer;

    .fc-daygrid-day-frame {
      ${getBreakpointsStyles({
        desktop: css`
          min-height: 125px;
        `,
        tablet: css`
          min-height: 144px;
        `,
        mobile: css`
          min-height: 94px;
        `,
      })}
    }
  `}
`
