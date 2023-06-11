import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../../../utils/storage'
import { useSearchParams } from 'react-router-dom'

const CALENDAR_TYPE_QUERY = 'calendar-type'

export const useCalendarPageLogic = () => {
  const [params, setParams] = useSearchParams()

  const [selectedDate, setSelectedDate] = useState(
    new Date(getStorageItem(STORAGE_KEYS.SELECTED_DATE, new Date())),
  )
  const [calendarType, setCalendarType] = useState(params.get(CALENDAR_TYPE_QUERY) ?? 'month')

  useEffect(
    () => setStorageItem(STORAGE_KEYS.SELECTED_DATE, selectedDate.toISOString()),
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
