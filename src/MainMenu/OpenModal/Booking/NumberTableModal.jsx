import React from 'react';
import style from './numberTableModal.module.scss';

const NumberTableModal = ({ setNumberTable, setOpenNumberWindow }) => {
  const handleAddNumber = (number) => {
    setNumberTable(number)
  };
  
  const handleCloseWindowTable = () => {
    setOpenNumberWindow(false);
  }

  const showTable = () => {
    const arrNumber = [];
    for (let i = 0; i < 9; i++) {
      arrNumber.push(i);
    }
    return arrNumber.map((number) => (
      <div key={number} className={style.table}>
        <div className={style.table_square}>
          <div className={style.circle} onClick={() => handleAddNumber(number + 1)}>
            {number + 1}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={style.number_table}>
      <div className={style.number_text_button}>
        <p className={style.number_text}>Номер столика: </p>
        <button className={style.number_button} onClick={handleCloseWindowTable}>x</button>
      </div>
      <div className={style.divNT}>{showTable()}</div>
    </div>
  );
};

export default NumberTableModal;
