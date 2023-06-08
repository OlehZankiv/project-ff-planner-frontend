import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useDimensions } from '../../../hooks'
import styled, { css } from 'styled-components'
import { getBreakpointsStyles, getMobileStyles } from '../../../styles/breakpoints'
import dayjs from 'dayjs'

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const { height, width } = useDimensions()

  return (
    <CalendarWrapper>
      <FullCalendar
        key={selectedDate.getMonth()}
        dayHeaders={false}
        initialDate={selectedDate}
        dateClick={(info) => {
          if (!dayjs(info.date).isBefore(new Date(), 'day')) setSelectedDate(info.date)
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={null}
        initialView='dayGridMonth'
        dayCellContent={(props) => (
          <DayCell
            disabled={dayjs(props.date).isBefore(new Date(), 'day')}
            className={
              props.date.toDateString() === selectedDate.toDateString() ? 'selected' : undefined
            }
          >
            {props.dayNumberText}
          </DayCell>
        )}
        events={[
          {
            id: '1',
            title: 'All-day event',
            start: selectedDate,
            backgroundColor: '#FCF0D4',
            textColor: '#F3B249',
            display: 'block',
          },

          {
            id: '2',
            title: 'All-day event',
            start: selectedDate,
            backgroundColor: '#FCF0D4',
            textColor: '#F3B249',
            display: 'block',
          },

          {
            id: '3',
            title: 'All-day event',
            start: selectedDate,
            backgroundColor: '#FCF0D4',
            textColor: '#F3B249',
            display: 'block',
          },

          {
            id: '4',
            title: 'All-day event',
            start: selectedDate,
            backgroundColor: '#FCF0D4',
            textColor: '#F3B249',
            display: 'block',
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
  ${({ theme: { colors }, disabled }) => css`
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
    opacity: ${disabled ? 0.5 : 1};

    &.selected {
      background-color: ${colors.primary};
      color: ${colors.white} !important ;
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
    .fc.fc-media-screen {
      border: 1px solid ${colors.calendarBorder} !important;
      border-radius: 8px;
    }

    table {
      border: 1px solid ${colors.calendarBorder} !important;
      border-radius: 8px;
      overflow: hidden;
    }

    .fc-scrollgrid {
      border-collapse: collapse;
    }

    td.fc-day {
      :hover {
        opacity: 0.85;
      }

      :active {
        opacity: 0.7;
      }
    }

    td.fc-day-today .fc-daygrid-day-number div {
      color: ${colors.primary};
    }

    td.fc-day-today,
    td.fc-daygrid-day {
      background-color: ${colors.content} !important;
      border: 1px solid ${colors.calendarBorder};
      cursor: pointer;

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

    .fc-daygrid-day-events {
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      padding: 8px;
      max-height: calc(34px * 3.5);
      overflow-y: auto;

      .fc-event {
        margin: 0;
        border: none;
        border-radius: 8px;
        padding: 4px 10px;

        .fc-event-time {
          display: none;
        }

        .fc-event-title {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          text-overflow: ellipsis;
        }
      }
    }
  `}
`
