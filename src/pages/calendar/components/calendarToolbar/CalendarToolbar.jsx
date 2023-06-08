import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { useState } from 'react'
import PeriodPaginator from './PeriodPaginator'
import PeriodTypeSelect from './PeriodTypeSelect';

const CalendarToolbar = () => {

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const isPrevMonthDisabled = (currentYear === year && currentMonth === month)

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev)=>  prev - 1 );
    } else {
      setMonth((prev)=>  prev - 1 );
    }
  };
    
  const handleNextMonth = () => {

    if (month === 11) {
      setMonth(0);
      setYear((prev)=> prev + 1)
    } else {
      setMonth((prev)=> prev + 1);
      }
  };
    
    return (
      <CalendarToolbarWrapper style={{ marginBottom: '12px'}}>
        <PeriodPaginator month={month} year={year}  isPrevMonthDisabled={isPrevMonthDisabled}
        handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth}
        > </PeriodPaginator>
         <PeriodTypeSelect></PeriodTypeSelect>
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