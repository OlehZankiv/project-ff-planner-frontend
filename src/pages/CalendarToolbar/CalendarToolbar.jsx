import { Text } from '../../components/Text'
import { CalendarToolbarWrapper, MonthWrapper, MonthText, ChooseCalendarTypeWrapper, MonthButton, DayButton, NextMonthIconButton , PrevMonthIconButton , IconsWrapper, AlignItemsWrapper} from './CalendarToolbar.styled'
import { NextMonthIcon } from '../../assets/icons/NextMonthIcon'
import { PrevMonthIcon } from '../../assets/icons/PrevMonthIcon'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CalendarToolbar = () => {

  const { t } = useTranslation();

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [isDisabled, setIsDisabled] = useState(false);

  console.log(month)
   console.log(currentMonth)
  console.log(isDisabled)
  
    const MonthName = () => {
          switch (month) {
            case 0:
             return ('January'.toUpperCase())
            case 1:
             return ('February'.toUpperCase())
            case 2:
              return ('March'.toUpperCase())
              case 3:
              return('April'.toUpperCase())
              case 4:
              return('May'.toUpperCase())
              case 5:
              return('June'.toUpperCase())
              case 6:
              return('July'.toUpperCase())
              case 7:
              return('August'.toUpperCase())
              case 8:
              return('September'.toUpperCase())
              case 9:
              return('October'.toUpperCase())
              case 10:
              return('November'.toUpperCase())
              case 11:
              return('December'.toUpperCase())  
    }}
    
    const NamedMonth = MonthName()
  
    const checkDisabledMonth = () => {
    if (year == currentYear && month == currentMonth) {
      setIsDisabled(true)
      } else setIsDisabled(false) 
  }

  const handlePrevMonth = () => {
    checkDisabledMonth()
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
    
  const handleNextMonth = () => {
      checkDisabledMonth()
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
      }
  };

  
  console.log(isDisabled)
    
    return (
      <CalendarToolbarWrapper>
        <AlignItemsWrapper>
          <MonthWrapper>
            <MonthText>{NamedMonth}   {year}</MonthText>
          </MonthWrapper>
          <IconsWrapper>
            <PrevMonthIconButton onClick={() => handlePrevMonth()} disabled={isDisabled}>
              <PrevMonthIcon width={11} height={11} color={isDisabled ? '#DCE3E5': '#343434'} ></PrevMonthIcon>
            </PrevMonthIconButton>
            <NextMonthIconButton   onClick={() => handleNextMonth()}>
              <NextMonthIcon width={11} height={11} color={'#343434'} ></NextMonthIcon>
            </NextMonthIconButton>
          </IconsWrapper>
        </AlignItemsWrapper>
        <ChooseCalendarTypeWrapper>
          <MonthButton>
            <Text type='p' font-size='22' color='blue'>
              {t('Month')}
            </Text>
          </MonthButton >
          <DayButton >
            <Text type='p' color='blue'>
              {t('Day')}
            </Text>
          </DayButton>
        </ChooseCalendarTypeWrapper>
      </CalendarToolbarWrapper>
    )
}

export default CalendarToolbar