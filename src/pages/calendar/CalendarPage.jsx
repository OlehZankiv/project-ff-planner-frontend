import { CalendarWeek } from './components/CalendarWeek'
import { Calendar } from './components/Calendar'
import { CalendarToolbar } from './components/calendarToolbar/CalendarToolbar'
import { TodosContent } from './components/TodosContent'
import styled from 'styled-components'
import { useCalendarPageLogic } from './hooks/useCalendarPageLogic'

const CalendarPage = () => {
  const { selectedDate, setSelectedDate, calendarType, setCalendarType } = useCalendarPageLogic()

  // const { tasks } = useTasks()
  // const { createTask } = useCreateTask()
  //
  // useEffect(() => {
  //   createTask(
  //     toTaskDTO(
  //       toTask({
  //         category: 'to-do',
  //         startAt: new Date().getTime(),
  //         endAt: new Date().getTime(),
  //         priority: 'low',
  //         title: 'Do something',
  //       }),
  //     ),
  //   )
  // }, [])
  //
  // console.log(tasks)
  return (
    <Wrapper>
      <CalendarToolbar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        calendarType={calendarType}
        setCalendarType={setCalendarType}
      />
      <CalendarWeek
        calendarType={calendarType}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {calendarType === 'month' ? (
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setCalendarType={setCalendarType}
        />
      ) : (
        <TodosContent selectedDate={selectedDate} />
      )}
    </Wrapper>
  )
}

export default CalendarPage

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
