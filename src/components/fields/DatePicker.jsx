import { DayPicker } from 'react-day-picker'
import { Input } from './Input'
import { useEffect, useRef, useState } from 'react'
import 'react-day-picker/dist/style.css'
import styled, { css, useTheme } from 'styled-components'
import dayjs from 'dayjs'
import { Text } from '../Text'
import { ChevronDownIcon } from '../../assets/icons/'
import { useField } from 'formik'

export const DatePicker = (inputProps) => {
  const { colors } = useTheme()
  const [isVisible, setVisible] = useState(false)

  const [, { value: selectedDay }, { setValue: setSelectedDay }] = useField(inputProps.name)

  const wrapper = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapper.current && !wrapper.current.contains(event.target)) {
        setVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <Wrapper>
      <PickerWrapper ref={wrapper} visible={isVisible}>
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
          onDayClick={(date) => {
            setVisible(false)
            setSelectedDay(date)
          }}
          selected={selectedDay}
        />
      </PickerWrapper>
      <div onClick={() => setVisible(true)}>
        <Input
          {...inputProps}
          rightIcon={
            <InputIconWrapper visible={isVisible}>
              <ChevronDownIcon color={colors.text} />
            </InputIconWrapper>
          }
          readonly
          value={selectedDay ? dayjs(selectedDay).format('DD/MM/YYYY') : ''}
        />
      </div>
    </Wrapper>
  )
}

const InputIconWrapper = styled.div`
  ${({ visible }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s transform;
    transform: rotateZ(${visible ? 180 : 0}deg);
  `}
`

const PickerWrapper = styled.div`
  ${({ visible }) => css`
    position: absolute;
    z-index: 10000000;
    bottom: 0;
    left: 50%;
    transition: 0.15s transform;
    transform-origin: top;
    transform: translate(-50%, 100%) scale(${visible ? 1 : 0});
  `}
`

const Wrapper = styled.div`
  position: relative;
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
