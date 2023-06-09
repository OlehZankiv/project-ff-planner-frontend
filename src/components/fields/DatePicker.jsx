import { DayPicker } from 'react-day-picker'
import { Input } from './Input'
import { useState } from 'react'
import 'react-day-picker/dist/style.css'
import styled, { css, useTheme } from 'styled-components'
import dayjs from 'dayjs'
import { Text } from '../Text'

export const DatePicker = () => {
  const { colors } = useTheme()
  const [selectedDay, setSelectedDay] = useState()
  console.log(selectedDay)

  return (
    <Wrapper>
      <DayPicker
        weekStartsOn={1}
        formatters={{
          formatDay: (date) => {
            const isSelectedDay = dayjs(selectedDay).isSame(date)
            const isWeekendDay =
              !dayjs(selectedDay).isSame(date) && [0, 6].includes(date.getDay()) ? 0.5 : 1

            return (
              <Text
                style={{ opacity: isWeekendDay && !isSelectedDay }}
                type='h4'
                fontSize={18}
                lineHeight={24}
                fontWeight={400}
                color={isSelectedDay ? 'primary' : 'white'}
              >
                {date.getDate()}
              </Text>
            )
          },
          formatWeekdayName: (date) => (
            <Text type='h4' fontSize={18} lineHeight={24} color='white'>
              {dayjs(date).format('dd').slice(0, 1)}
            </Text>
          ),
        }}
        styles={{
          root: {
            margin: 0,
            color: colors.white,
          },
          month: {
            padding: 16,
            borderRadius: 16,
            background: colors.primary,
          },
          caption: { position: 'relative', marginBottom: 12 },
          nav: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          caption_label: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          head: {
            borderBottom: `1px solid ${colors.calendarPickerBorder}`,
          },
        }}
        onDayClick={setSelectedDay}
        selected={selectedDay}
      />
      <Input type='date' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    .rdp-day {
      &.rdp-day_today {
        -webkit-text-stroke-width: medium;
      }

      &.rdp-day_selected {
        background-color: ${colors.white};
      }

      &:hover {
        h4 {
          color: ${colors.primary};
        }
      }
    }
    .rdp-button.rdp-nav_button {
      background-color: transparent !important;

      :hover {
        opacity: 0.8;
      }

      :active {
        opacity: 0.6;
      }
    }
  `}
`
