import { useState } from 'react'
import { Calendar } from './components/Calendar'
import CalendarToolbar from '../calendar/components/calendarToolbar/CalendarToolbar'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div>
      <CalendarToolbar></CalendarToolbar>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default CalendarPage
