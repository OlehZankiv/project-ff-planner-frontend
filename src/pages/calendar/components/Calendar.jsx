import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import styled from 'styled-components'

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  console.log(selectedDate)
  return (
    <CalendarWrapper>
      <FullCalendar
        headerToolbar={null}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        showNonCurrentDates={false}
        fixedWeekCount={false}
        firstDay={1}
        dateClick={(info) => setSelectedDate(info.date)}
      />
    </CalendarWrapper>
  )
}

const CalendarWrapper = styled.section`
  & thead {
    display: none;
  }
  & table {
    max-width: 100%;
    max-height: 625px;
    background: #ffffff;
    border-radius: 8px;
    cursor: pointer; // добавить курсор на день
  }
  & .fc-theme-standard td {
    border: 1px solid rgba(220, 227, 229, 0.8);
  }
  & .fc-day-today.fc-daygrid-day {
    background-color: #fff;
    & .fc-daygrid-day-number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
      background: #3e85f3;
      border-radius: 8px;
      color: #ffffff;
    }
  }
  & .fc-daygrid-day-number {
    margin-top: 14px;
    margin-right: 14px;
    padding: 0;
    /* background-color: red; */
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1, 12px;
    text-transform: uppercase;
    color: #343434;
  }
  & .fc-day-disabled {
    background-color: #fff;
  }
`
