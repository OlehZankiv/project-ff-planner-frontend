import styled from 'styled-components'
import { CalendarPagination } from './CalendarPagination'
import { GroupButtons } from '../../../../components'
import { useTranslation } from 'react-i18next'

export const CalendarToolbar = ({
  selectedDate,
  setSelectedDate,
  calendarType,
  setCalendarType,
}) => {
  const { t } = useTranslation()

  return (
    <CalendarToolbarWrapper style={{ marginBottom: '24px' }}>
      <CalendarPagination
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        calendarType={calendarType}
      />
      <GroupButtons
        selected={calendarType}
        buttons={[
          {
            type: 'month',
            onClick: setCalendarType,
            title: t('Month'),
          },
          {
            type: 'day',
            onClick: setCalendarType,
            title: t('Day'),
          },
        ]}
      />
    </CalendarToolbarWrapper>
  )
}

const CalendarToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
