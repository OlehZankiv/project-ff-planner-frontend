import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { TodosContent } from './components/TodosContent'
import styled from 'styled-components'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('08.07.2023'))

  return (
    <Wrapper>
      <CalendarWeek
        isDayView={true}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <TodosContent selectedDate={selectedDate} />
      {/* <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />*/}
    </Wrapper>
  )
}

export default CalendarPage

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
