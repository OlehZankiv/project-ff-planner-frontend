import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('08.07.2023'))

  return (
    <div>
      <CalendarWeek
        isDayView={true}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default CalendarPage
