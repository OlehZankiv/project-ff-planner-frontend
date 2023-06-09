import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'
import CalendarToolbar from './components/calendarToolbar/CalendarToolbar'
import { useNavigate, useLocation } from 'react-router-dom'

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
      <CalendarWeek
        isDayView={false}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {calendarType === 'month' && (
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      )}
      {calendarType === 'day' && <div>Add day calendar</div>}
    </div>
  )
}

export default CalendarPage