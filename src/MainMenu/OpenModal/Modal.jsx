import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import xDelete from './filesModal/eva_close-fill.png';
import logo from './filesModal/logo.png';
import Booking from './Booking/DateTimeSelect';
import { useDispatch } from 'react-redux';
import { addBooking, fetchBooking } from '../../reducers/Slice/bookingSlice';
import NumberTableModal from './Booking/NumberTableModal';
import { motion } from 'framer-motion';

function ModalWindow({ setModalWindow, modalWindow }) {
  const [openWindowDate, setOpenWindowDate] = useState(false);
  const [openNumberWindow, setOpenNumberWindow] = useState(false);
  const [dataBooking, setDataBooking] = useState({});
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [dateTime, setDateTime] = useState({ date: '00-00-0000', time: '00:00' });
  const [numberTable, setNumberTable] = useState();
  const [isEqualDataBooking, setIsEqualDataBooking] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooking());
    setDataBooking({
      numberTable: numberTable,
      nameUser: name,
      numberUser: number,
      date: dateTime.date,
      time: dateTime.time,
    });
  }, [dispatch, dateTime, name, number, numberTable]);

  console.log(dateTime);

  const handleOpenWindowDate = () => {
    setOpenWindowDate(true);
  };

  const handleOpenWindowNumber = () => {
    setOpenNumberWindow(true);
  };

  const handleOpenWindow = () => {
    setModalWindow(!modalWindow);
  };

  const handleAddBooking = () => {
    if (number && dateTime.date !== '00:00:0000' && dateTime.time !== '00:00' && numberTable) {
      dispatch(addBooking(dataBooking));
      setIsEqualDataBooking(false);
    } else {
      setIsEqualDataBooking(true);
    }
    setName('');
    setNumber('');
    console.log(numberTable);
  };

  console.log(numberTable);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setNumber(e.target.value);
  };

  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -150,
        left: -150,
        right: 150,
        bottom: 150,
      }}
      className={styles.parentModal}>
      <div className={styles.opacity_block}>
        <div className={styles.backgroundPhoto}>
          <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className={styles.bookingWindow}>
            <div onClick={() => handleOpenWindow()} className={styles.divX}>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={xDelete}
                alt="x"
                className={styles.imgX}
              />
            </div>

            <div className={styles.divLogo}>
              <img src={logo} alt="logo" className={styles.imgLogo} />
            </div>

            <div className={styles.divTextBooking}>
              <div className={styles.textBooking}>Забронировать столик</div>
            </div>

            <div className={styles.divInpName}>
              <input
                type="text"
                placeholder=" Имя"
                onChange={handleChangeName}
                className={styles.inpName}
              />
            </div>

            <div className={styles.divInpPhone}>
              <input
                type="text"
                placeholder=" Телефон"
                onChange={handleChangePhone}
                className={styles.inpPhone}
              />
            </div>

            {isEqualDataBooking && (
              <p className={styles.error_div_bookingdata}>Проверьте все данные!!!</p>
            )}

            <div className={styles.divBtnTableAndTime}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnTable}
                onClick={handleOpenWindowNumber}>
                Столик
              </motion.button>
              {openNumberWindow && (
                <div className={styles.divWindowNumber}>
                  <NumberTableModal
                    setNumberTable={setNumberTable}
                    setOpenNumberWindow={setOpenNumberWindow}
                  />
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnTime}
                onClick={handleOpenWindowDate}>
                Время
              </motion.button>
              {openWindowDate && (
                <div className={styles.divWindowBooking}>
                  <Booking
                    setOpenWindowDate={setOpenWindowDate}
                    dateTime={dateTime}
                    setDateTime={setDateTime}
                  />
                </div>
              )}
            </div>
            <div className={styles.divBtnBooking}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnBooking}
                onClick={handleAddBooking}>
                Забронировать
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      </motion.div>
  );
}

export default ModalWindow;
