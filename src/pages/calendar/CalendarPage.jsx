import { useState } from 'react'
import { Calendar } from './components/Calendar'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default CalendarPage
