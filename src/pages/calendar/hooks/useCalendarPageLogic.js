import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../../../utils/storage'
import { useSearchParams } from 'react-router-dom'
import dayjs from 'dayjs'

const CALENDAR_TYPE_QUERY = 'calendar-type'

export const useCalendarPageLogic = () => {
  const [params, setParams] = useSearchParams()

  const [selectedDate, setSelectedDate] = useState(
    new Date(getStorageItem(STORAGE_KEYS.SELECTED_DATE, new Date())),
  )
  const [calendarType, setCalendarType] = useState(params.get(CALENDAR_TYPE_QUERY) ?? 'month')

  useEffect(
    () =>
      setSelectedDate((prev) => {
        let newDate = dayjs(prev).isBefore(new Date(), 'day') ? new Date() : prev

        setStorageItem(STORAGE_KEYS.SELECTED_DATE, newDate.toISOString())

        return newDate
      }),
    [selectedDate],
  )

  useEffect(() => {
    if (!calendarType) return

    params.set(CALENDAR_TYPE_QUERY, calendarType)
    setParams(params)
  }, [params, setParams, calendarType])

  return {
    calendarType,
    setCalendarType,
    selectedDate,
    setSelectedDate,
  }
}
