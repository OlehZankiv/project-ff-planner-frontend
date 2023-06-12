import 'react-day-picker/dist/style.css'
import { useField } from 'formik'
import { OpacityButton } from '../buttons/OpacityButton'
import { MobileTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Input } from './Input'
import { useState } from 'react'

export const TimePicker = ({ name, minTime, ...props }) => {
  const [isOpen, setOpen] = useState(false)

  const [, { value }, { setValue }] = useField(name)

  return (
    <MobileTimePicker
      ampm={false}
      views={['hours', 'minutes']}
      format='HH:mm'
      open={isOpen}
      minTime={minTime}
      onAccept={(date) => setValue(date.toDate())}
      value={dayjs(value)}
      onClose={() => setOpen(false)}
      openTo='hours'
      components={{
        Field: (fieldProps) => (
          <OpacityButton onClick={() => setOpen((prev) => !prev)}>
            <Input
              {...fieldProps}
              {...props}
              style={{ marginBottom: 0, ...props.style }}
              value={dayjs(value).format('HH:mm')}
              readonly
            />
          </OpacityButton>
        ),
      }}
    />
  )
}
