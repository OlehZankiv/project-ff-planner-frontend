import { useState } from 'react'
import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'
// import { NotFoundPage } from '../notFoundPage/NotFoundPage'

const CalendarPage = ({}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('08.07.2023'))

  return (
    <div>
      {/* <NotFoundPage /> */}
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
