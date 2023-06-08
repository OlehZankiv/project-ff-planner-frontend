import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div>
      <CalendarWeek selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default CalendarPage
