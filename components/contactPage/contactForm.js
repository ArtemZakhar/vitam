'use client';

import { Fragment, useRef, useState } from 'react';
import Image from 'next/image';

import classes from './contactPage.module.scss';
import Done from './icons/done.png';
import Spinner from './icons/spinner.svg';
import CargoInputList from './cargoInputList';

function ContactForm({ message }) {
  const {
    h1,
    name,
    nameLabel,
    check,
    email,
    emailLabel,
    msg,
    msgLabel,
    show,
    cargo_details,
    send,
    error,
    succeed,
  } = message;

  const initialState = {
    name: false,
    email: false,
    msg: false,
    cargo: false,
    transportType: false,
    index: false,
    loadingPlace: false,
    loadingCountry: false,
    deliveryPlace: false,
    deliveryCountry: false,
    paymentTerms: false,
    handle: false,
  };
  const [blure, setBlure] = useState(initialState);
  const [moreLines, setMoreLines] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [succeedMsg, setSucceedMsg] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const msgInputRef = useRef();

  // blure and styles
  function handleBlur(e, name) {
    if (e.target.value === '') {
      setBlure((prevState) => {
        return { ...prevState, [name]: false };
      });
    } else {
      setBlure((prevState) => {
        return { ...prevState, [name]: true };
      });
    }
  }
  function handleView() {
    moreLines ? setMoreLines(false) : setMoreLines(true);
  }

  //Submit form
  let cargoData = {};
  function getCargoData(value) {
    value.map((item) => {
      return (cargoData[Object.keys(item)] = item[Object.keys(item)]);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoadingMsg(true);

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMsg = msgInputRef.current.value;

    const FormData = {
      name: enteredName,
      email: enteredEmail,
      msg: enteredMsg,
      cargo: cargoData.cargo || 'no data',
      transportType: cargoData.transportType || 'no data',
      index: cargoData.index || 'no data',
      loadingPlace: cargoData.loadingPlace || 'no data',
      loadingCountry: cargoData.loadingCountry || 'no data',
      deliveryPlace: cargoData.deliveryPlace || 'no data',
      deliveryCountry: cargoData.deliveryCountry || 'no data',
      paymentTerms: cargoData.paymentTerms || 'no data',
      handle: cargoData.handle || 'no data',
    };

    fetch('/api/mailer', {
      method: 'POST',
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoadingMsg(false);
        setSucceedMsg(true);
        const timer = setTimeout(() => {
          setSucceedMsg(false);
        }, 3000);

        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        msgInputRef.current.value = '';

        setBlure({
          name: false,
          email: false,
          msg: false,
          cargo: false,
          transportType: false,
          index: false,
          loadingPlace: false,
          loadingCountry: false,
          deliveryPlace: false,
          deliveryCountry: false,
          paymentTerms: false,
          handle: false,
        });

        setMoreLines(false);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(true);
        const timer = setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
        return () => clearTimeout(timer);
      });
  }

  // data for CargoInputsList

  const dataForInputList = Object.entries(cargo_details).map(([id, info]) => {
    return { id, ...info };
  });

  return (
    <Fragment>
      <h2 className={classes.h1}>{h1}</h2>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={`${classes.field}`}>
          <input
            onBlur={(e) => handleBlur(e, 'name')}
            className={`${classes.inputName} ${blure.name && classes.focused}`}
            type="text"
            id="name"
            required
            ref={nameInputRef}
            placeholder={name}
          />
          <label className={classes.labelName} htmlFor="name">
            {nameLabel}
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure.name === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              width={20}
              height={20}
              alt="done"
            />
            <span
              style={{ opacity: `${blure.name === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              {check}
            </span>
          </div>
        </div>

        <div className={`${classes.field}`}>
          <input
            required
            onBlur={(e) => handleBlur(e, 'email')}
            className={`${classes.inputEmail} ${blure.email && classes.focused}`}
            type="text"
            id="email"
            ref={emailInputRef}
            placeholder={email}
          />
          <label className={classes.labelEmail} htmlFor="email">
            {emailLabel}
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure.email === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              alt="done"
              width={20}
              height={20}
            />
            <span
              style={{ opacity: `${blure.email === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              {check}
            </span>
          </div>
        </div>

        <div className={`${classes.field} ${classes.msg_box}`}>
          <textarea
            onBlur={(e) => handleBlur(e, 'msg')}
            className={`${classes.textareaMsg} ${blure.msg && classes.focused}`}
            id="msg"
            rows="5"
            ref={msgInputRef}
            placeholder={msg}
          />
          <label className={classes.textareaLabel} htmlFor="msg">
            {msgLabel}
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure.msg === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              alt="done"
              width={20}
              height={20}
            />
            <span
              style={{ opacity: `${blure.msg === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              {check}
            </span>
          </div>
        </div>

        <p onClick={handleView} className={classes.cargoDetailes}>
          {show}
        </p>

        {moreLines && (
          <>
            <CargoInputList
              messages={dataForInputList}
              handleBlur={handleBlur}
              check={check}
              blure={blure}
              getCargoData={getCargoData}
            />
          </>
        )}

        <div>
          <button className={classes.button} type="submit">
            {send}
          </button>
          <div className={classes.message__wrapper}>
            {loadingMsg && (
              <div className={`${classes.message} ${classes.message_spinner}`}>
                <Image width={40} height={40} alt="spinner" src={Spinner} />
              </div>
            )}
            {errorMsg && (
              <div className={`${classes.message} ${classes.message_error}`}>{error}</div>
            )}
            {succeedMsg && (
              <div className={`${classes.message} ${classes.message_succeed}`}>{succeed}</div>
            )}
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default ContactForm;
