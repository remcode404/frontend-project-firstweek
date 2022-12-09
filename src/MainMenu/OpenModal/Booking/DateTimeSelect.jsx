import React, { useState, useEffect } from 'react';
import moment from 'moment';
import localization from 'moment/locale/ru';
import style from './dateTimeSelect.module.scss';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const BookingTable = ({ setOpenWindowDate, setDateTime, dateTime}) => {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const [day, setDay] = useState('');
  const [monthYear, setMonthYear] = useState(moment().format('MM-YYYY'));
  const [time, setTime] = useState('00:00');
  const [date, setDate] = useState('');
  const [nowTime, setNowTime] = useState(moment().format('HH:mm'));
  const [isEqualDate, setIsEqualDate] = useState(false);
  const [isEqualTime, setIsEqualTime] = useState(false);

  moment.locale('ru', localization);

  const data = useSelector((state) => state.bookingReducer.booking);

  console.log(dateTime);

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
    setIsEqualTime(false)
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
      setIsEqualDate(false)
      if(time !== '00:00') {
        setIsEqualTime(false)
      }
      else {
        setIsEqualTime(true)
      }
    }
  }, [monthYear, day, date]);

  setInterval(() => {
    setNowTime(moment().format('HH:mm'));
  }, 1000);

  const handleSubmitData = () => {
    if(dateTime.date !== '00-00-0000' || time !== '00:00'){
      setDateTime({ time, date })
      setIsEqualDate(false)
    }else{
      setIsEqualDate(true)
    }
    if(time === '00:00') {
      setIsEqualTime(true)
    }
  };

  const handleCloseWindow = () => {
    setOpenWindowDate(false);
  };

  return (
    <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}>
      <div className={style.booking}>
        <div className={style.date_booking}>
          <p className={style.selectedDate}>{`Введенная дата: ${!date ? dateTime.date : date}`}</p>
          <div className={style.calendar}>
            <div className={style.switchMonth}>

              <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={style.month_substract} onClick={handleSubstractValueMonth}>
                {'<'}
              </motion.button>

              <span className={style.month_year}>
                {moment(monthYear, 'MM YYYY').format('MMMM YYYY')}
              </span>

              <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={style.month_add} onClick={handleAddValueMonth}>
                {'>'}
              </motion.button>

            </div>
            <div className={style.week_booking}>
              {weekDayNames.map((week) => (
                <p className={style.day_select} key={week}>
                  {week}
                </p>
              ))}
            </div>
            <div className={style.booking_days}>{printDaysInMonth()}</div>
            {isEqualDate && <p className={style.error_date}>Проверьте дату!!!</p>}
            {isEqualTime && <p className={style.error_date}>Проверьте время!!!</p>}
          </div>
        </div>
        <div className={style.time_booking}>

          <motion.button  
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={style.close_window_but} onClick={handleCloseWindow}>
            x
          </motion.button>

          <p className={style.selectedTime}>{`Выбранное время: ${time}`}</p>
          <div className={style.time_select}>{printTimeInDays()}</div>
        </div>
      </div>
      <div className={style.submit_data}>

        <motion.button  
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={style.submit_data_button} onClick={handleSubmitData}>
          Отправить дату и время
        </motion.button>

      </div>
    </motion.div>
  );
};

export default BookingTable;
