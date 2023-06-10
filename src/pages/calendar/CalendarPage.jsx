import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'
import CalendarToolbar from './components/calendarToolbar/CalendarToolbar'
import { useNavigate, useLocation } from 'react-router-dom'
import { TodosContent } from './components/TodosContent'
import styled from 'styled-components'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [calendarType, setCalendarType] = useState('month')

  const navigate = useNavigate()
  const location = useLocation()

  const changeCalendarType = (type) => {
    setCalendarType(type)
    const queryParams = new URLSearchParams(location.search)
    queryParams.set('type', type)
    navigate(`${location.pathname}?${queryParams.toString()}`)
  }

  return (
    <div>
      <CalendarToolbar
        changeCalendarType={changeCalendarType}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        calendarType={calendarType}
        setCalendarType={setCalendarType}
      ></CalendarToolbar>
      <Wrapper>
        <CalendarWeek
          isDayView={false}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        {calendarType === 'month' && (
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        )}
        {calendarType === 'day' && <TodosContent selectedDate={selectedDate} />}

        {/* <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />*/}
      </Wrapper>
    </div>
  )
}

export default CalendarPage

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
