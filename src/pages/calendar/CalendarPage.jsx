import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'
import CalendarToolbar from './components/calendarToolbar/CalendarToolbar'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div>
      <CalendarToolbar></CalendarToolbar>
      <CalendarWeek selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default CalendarPage