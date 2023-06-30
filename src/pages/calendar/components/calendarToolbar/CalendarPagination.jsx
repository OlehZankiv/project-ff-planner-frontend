import styled, { css, useTheme } from 'styled-components'
import dayjs from 'dayjs'
import { OpacityButton, Text } from '../../../../components'
import { ChevronDownIcon } from '../../../../assets/icons'
import { getMobileStyles } from '../../../../styles/breakpoints'

export const CalendarPagination = ({ selectedDate, setSelectedDate, calendarType }) => {
  const { colors } = useTheme()

  const isMonthSelected = calendarType === 'month'

  const handleNext = () =>
    setSelectedDate(
      dayjs(selectedDate)
        .add(1, isMonthSelected ? 'month' : 'week')
        .toDate(),
    )

  const handlePrev = () => {
    setSelectedDate(
      dayjs(selectedDate)
        .subtract(1, isMonthSelected ? 'month' : 'week')
        .toDate(),
    )
  }

  return (
    <Wrapper>
      <MonthWrapper>
        <Text color='white' type='h5' fontSize={16}>
          {dayjs(selectedDate).format(isMonthSelected ? 'MMMM YYYY' : 'D MMM YYYY')}
        </Text>
      </MonthWrapper>
      <PaginationWrapper>
        <ArrowIcon
          style={{
            transform: 'rotate(90deg)',
            borderTop: `1px solid ${colors.calendarBorder}`,
          }}
          onClick={handlePrev}
        >
          <ChevronDownIcon color={colors.icon} />
        </ArrowIcon>
        <ArrowIcon style={{ transform: 'rotate(-90deg)' }} onClick={handleNext}>
          <ChevronDownIcon color={colors.icon} />
        </ArrowIcon>
      </PaginationWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  ${getMobileStyles(css`
    justify-content: space-between;
    width: 100%;
  `)}
`

const MonthWrapper = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    background-color: ${colors.primary};
    box-shadow: ${shadows.modalShadow};
    border-radius: 8px;
    padding: 8px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 164px;
  `}
`

const ArrowIcon = styled(OpacityButton)`
  ${({ theme: {} }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
  `}
`

const PaginationWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    background-color: ${colors.scrollbarTrackBackground};
    border: 1px solid ${colors.calendarBorder};
    border-radius: 8px;
    overflow: hidden;
  `}
`
