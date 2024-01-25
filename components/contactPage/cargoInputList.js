import React, { forwardRef, useRef } from 'react';
import Image from 'next/image';

import classes from './contactPage.module.scss';
import Done from './icons/done.png';

const CargoInputList = forwardRef(function ({ messages, handleBlur, check, blure }, ref) {
  function listOfInputs(inputs) {
    const viewList = inputs.map((input, i) => {
      const { id, name, label } = input;
      return (
        <div className={`${classes.field}`} key={id}>
          <input
            onBlur={(e) => handleBlur(e, `${id}`)}
            className={`${classes.inputName} ${blure[id] && classes.focused}`}
            type="text"
            id={id}
            ref={ref.current[i]}
            placeholder={name}
          />
          <label className={classes.labelName} htmlFor={id}>
            {label}
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure[id] === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              alt="done"
              width={20}
              height={20}
            />
            <span
              style={{ opacity: `${blure[id] === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              {check}
            </span>
          </div>
        </div>
      );
    });
    return viewList;
  }

  const elements = listOfInputs(messages);

  return <>{elements}</>;
});

export default CargoInputList;
