import { useState } from 'react'
import { CalendarWeek } from "./components/CalendarWeek"
import { Calendar } from './components/Calendar'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <div>
      <CalendarWeek />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default CalendarPage
