import React from 'react';
import style from './numberTableModal.module.scss';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const NumberTableModal = ({ setNumberTable, setOpenNumberWindow }) => {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleAddNumber = (number) => {
    setNumberTable(number);
  };
  

  const handleCloseWindowTable = () => {
    setOpenNumberWindow(false);
  };

  const numberTableArr = useSelector((state) => state.bookingReducer.booking)

  const showTable = () => {
    const arrNumber = [];
    for (let i = 0; i < 9; i++) {
      arrNumber.push(i);
    }
    return arrNumber.map((number) => {
      const isSelect = numberTableArr.map(
        (numberArr) => numberArr = numberArr.numberTable
      ).find(numberArr => number + 1 === numberArr)
      let isActive = isSelect ? {background: 'gray'} : {}
      return (
        <div key={number} className={style.table}>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={style.table_square}>
            <button className={style.circle} disabled={isSelect} style={isActive} onClick={() => handleAddNumber(number + 1)}>
              {number + 1}
            </button>
          </motion.div>
        </div>
      )
    } 
    
  )};

  return (
    <motion.div 
    variants={animationConfiguration}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
      className={style.number_table}>

      <div className={style.number_text_button}>
        <p className={style.number_text}>Номер столика: </p>
        <button className={style.number_button} onClick={handleCloseWindowTable}>
          x
        </button>
      </div>
      <div className={style.divNT}>{showTable()}</div>
    </motion.div>
  );
};

export default NumberTableModal;
