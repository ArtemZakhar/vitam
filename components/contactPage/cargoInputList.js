import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import classes from './contactPage.module.scss';
import Done from './icons/done.png';

export default function CargoInputList({ messages, handleBlur, check, blure, getCargoData }) {
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  if (inputRefs.current) {
    const inputInformation = inputRefs.current.map((input) => {
      const value = input.current?.value ? input.current.value : 'no information';
      return { [input.current?.id]: value };
    });
    getCargoData(inputInformation);
    console.log(inputInformation);
  }

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
            ref={inputRefs.current[i]}
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
}
