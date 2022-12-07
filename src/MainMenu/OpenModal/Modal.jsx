import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import xDelete from './filesModal/eva_close-fill.png';
import logo from './filesModal/logo.png';
import Booking from './Booking/DateTimeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, fetchBooking } from '../../reducers/Slice/bookingSlice';

function ModalWindow({ setModalWindow, modalWindow }) {
  const [openWindowDate, setOpenWindowDate] = useState(false);
  const [dataBooking, setDataBooking] = useState({});
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [dateTime, setDateTime] = useState({})
  const [numberTable, setNumberTable] = useState(1)
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchBooking())
    if(true){
      setDataBooking({ numberTable: '1', nameUser: name, numberUser: number, date: dateTime.date, time: dateTime.time})
    }
  }, [dispatch, dateTime, name, number])

  const handleOpenWindowDate = () => {
    setOpenWindowDate(true);
  };

  const handleOpenWindow = () => {
    setModalWindow(!modalWindow);
  };

  const handleAddBooking = () => {
    if(true){
      dispatch(addBooking(dataBooking))
    }
    
    console.log(dataBooking);
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangePhone = (e) => {
    setNumber(e.target.value)
  }

  return (
    <div className={styles.parentModal}>
      <div className={styles.opacity_block}>
        <div className={styles.backgroundPhoto}>
          <div className={styles.bookingWindow}>
            <div onClick={() => handleOpenWindow()} className={styles.divX}>
              <img src={xDelete} alt="x" className={styles.imgX} />
            </div>

            <div className={styles.divLogo}>
              <img src={logo} alt="logo" className={styles.imgLogo} />
            </div>

            <div className={styles.divTextBooking}>
              <div className={styles.textBooking}>Забронировать столик</div>
            </div>

            <div className={styles.divInpName}>
              <input type="text" placeholder=" Имя" onChange={handleChangeName} className={styles.inpName} />
            </div>

            <div className={styles.divInpPhone}>
              <input type="text" placeholder=" Телефон" onChange={handleChangePhone} className={styles.inpPhone} />
            </div>

            <div className={styles.divBtnTableAndTime}>
              <button className={styles.btnTable}>Столик</button>

              <button className={styles.btnTime} onClick={handleOpenWindowDate}>
                Время
              </button>
              {openWindowDate && (
                <div className={styles.divWindowBooking}>
                  <Booking
                    setOpenWindowDate={setOpenWindowDate}
                    setDateTime={setDateTime}
                  />
                </div>
              )}
            </div>
            <div className={styles.divBtnBooking}>
              <button className={styles.btnBooking} onClick={handleAddBooking}>Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
