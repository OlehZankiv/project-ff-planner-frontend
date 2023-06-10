import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import PeriodPaginator from './PeriodPaginator'
import PeriodTypeSelect from './PeriodTypeSelect'

const CalendarToolbar = ({ changeCalendarType, selectedDate, setSelectedDate, calendarType }) => {
  return (
    <CalendarToolbarWrapper style={{ marginBottom: '24px' }}>
      <PeriodPaginator
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        calendarType={calendarType}
      >
        {' '}
      </PeriodPaginator>
      <PeriodTypeSelect
        changeCalendarType={changeCalendarType}
        calendarType={calendarType}
      ></PeriodTypeSelect>
    </CalendarToolbarWrapper>
  )
}

const CalendarToolbarWrapper = styled.div`
    display: block;
    flex-direction: row;
     ${getBreakpointsStyles({
       tablet: css`
         display: flex;
         justify-content: space-between;
       `,
       desktop: css`
         display: flex;
         justify-content: space-between;
       `,
     })}
 }
`

export default CalendarToolbar
