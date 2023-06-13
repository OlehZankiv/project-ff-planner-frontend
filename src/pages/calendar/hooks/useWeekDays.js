import { useTranslation } from 'react-i18next'
import { useBreakpointValue } from '../../../styles/breakpoints'
import { useMemo } from 'react'
import dayjs from 'dayjs'

export const useWeekDays = (selectedDate) => {
  const { t } = useTranslation()

  const Monday = useBreakpointValue({
    desktopValue: t('Mon'),
    tabletValue: t('Mon'),
    mobileValue: t('Mon').slice(0, 1),
  })
  const Tuesday = useBreakpointValue({
    desktopValue: t('Tue'),
    tabletValue: t('Tue'),
    mobileValue: t('Tue').slice(0, 1),
  })
  const Wednesday = useBreakpointValue({
    desktopValue: t('Wed'),
    tabletValue: t('Wed'),
    mobileValue: t('Wed').slice(0, 1),
  })
  const Thursday = useBreakpointValue({
    desktopValue: t('Thu'),
    tabletValue: t('Thu'),
    mobileValue: t('Thu').slice(0, 1),
  })
  const Friday = useBreakpointValue({
    desktopValue: t('Fri'),
    tabletValue: t('Fri'),
    mobileValue: t('Fri').slice(0, 1),
  })
  const Saturday = useBreakpointValue({
    desktopValue: t('Sat'),
    tabletValue: t('Sat'),
    mobileValue: t('Sat').slice(0, 1),
  })
  const Sunday = useBreakpointValue({
    desktopValue: t('Sun'),
    tabletValue: t('Sun'),
    mobileValue: t('Sun').slice(0, 1),
  })

  const daysText = useMemo(
    () => [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
    [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
  )

  return useMemo(() => {
    let day = dayjs(selectedDate)

    if (day.day() === 0) day = day.subtract(1, 'day')

    const monday = day.day(1)

    const days = new Array(7).fill(null).map((_, i) => monday.clone().add(i, 'day').toDate())

    return days.map((date, i) => ({
      text: daysText[i],
      date,
    }))
  }, [selectedDate, daysText])
}
