import React, { useState, useEffect } from 'react';
import moment from 'moment';
import localization from 'moment/locale/ru';
import style from './dateTimeSelect.module.scss';
import { useSelector } from 'react-redux';

const BookingTable = ({ setOpenWindowDate, setDateTime}) => {
  const [day, setDay] = useState('');
  const [monthYear, setMonthYear] = useState(moment().format('MM-YYYY'));
  const [time, setTime] = useState('09:00');
  const [date, setDate] = useState('');
  const [nowTime, setNowTime] = useState(moment().format('HH:mm'));
  const [isEqualDate, setIsEqualDate] = useState(false);

  moment.locale('ru', localization);

  const data = useSelector((state) => state.bookingReducer.booking);

  const defaultProps = {
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    timeForSelect: [
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '22:30',
      '23:00',
      '23:30',
      '24:00',
    ],
  };

  const { weekDayNames, timeForSelect } = defaultProps;

  const handleAddDay = (dayValue) => {
    if (dayValue.toString().split('').length > 1) {
      setDay(dayValue.toString());
    } else {
      setDay('0' + dayValue);
    }
  };

  const printDaysInMonth = () => {
    const daysMonthValue = moment(monthYear, 'MM YYYY').daysInMonth();
    const arrDays = [];
    for (let i = 0; i < daysMonthValue; i++) {
      arrDays.push(i);
    }
    return arrDays.map((day) => (
      <button key={day} className={style.switchMonthButton} onClick={() => handleAddDay(day + 1)}>
        {day + 1}
      </button>
    ));
  };

  const handleSelectTime = (timeValue) => {
    setTime(timeValue);
  };

  const printTimeInDays = () => {
    return timeForSelect.map((timeSelect) => (
      <button
        key={timeSelect}
        className={style.selectTimeButton}
        onClick={() => handleSelectTime(timeSelect)}>
        {timeSelect}
      </button>
    ));
  };

  const handleSubstractValueMonth = () => {
    if (moment(date, 'DD-MM-YYYY').isAfter(moment(moment(), 'DD-MM-YYYY').clone())) {
      setMonthYear(moment(monthYear, 'MM-YYYY').add(-1, 'M').format('MM-YYYY'));
    }
  };

  const handleAddValueMonth = () => {
    if (moment(date, 'DD-MM-YYYY').isBefore(moment(moment(), 'DD-MM-YYYY').add(1, 'y').clone())) {
      setMonthYear(moment(monthYear, 'MM-YYYY').add(1, 'M').format('MM-YYYY'));
    }
  };

  useEffect(() => {
    if (day) {
      setDate(day.toString() + '-' + monthYear.toString());
    }
  }, [monthYear, day]);

  setInterval(() => {
    setNowTime(moment().format('HH:mm'));
  }, 1000);

  const handleSubmitData = () => {
    if(true){
      setDateTime({ time, date })
    }
  };

  const handleCloseWindow = () => {
    setOpenWindowDate(false);
  };

  return (
    <div>
      <div className={style.booking}>
        <div className={style.date_booking}>
          <p className={style.selectedDate}>{`Введенная дата: ${!date ? '00-00-0000' : date}`}</p>
          <div className={style.calendar}>
            <div className={style.switchMonth}>
              <button className={style.month_substract} onClick={handleSubstractValueMonth}>
                {'<'}
              </button>
              <span className={style.month_year}>
                {moment(monthYear, 'MM YYYY').format('MMMM YYYY')}
              </span>
              <button className={style.month_add} onClick={handleAddValueMonth}>
                {'>'}
              </button>
            </div>
            <div className={style.week_booking}>
              {weekDayNames.map((week) => (
                <p className={style.day_select} key={week}>
                  {week}
                </p>
              ))}
            </div>
            <div className={style.booking_days}>{printDaysInMonth()}</div>
            {!isEqualDate && <p className={style.error_date}>Проверьте дату!!!</p>}
          </div>
        </div>
        <div className={style.time_booking}>
          <button className={style.close_window_but} onClick={handleCloseWindow}>
            x
          </button>
          <p className={style.selectedTime}>{`Выбранное время: ${time}`}</p>
          <div className={style.time_select}>{printTimeInDays()}</div>
        </div>
      </div>
      <div className={style.submit_data}>
        <button className={style.submit_data_button} onClick={handleSubmitData}>
          Отправить дату и время
        </button>
      </div>
    </div>
  );
};

export default BookingTable;
