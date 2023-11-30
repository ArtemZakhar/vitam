'use client';

import { Fragment, useRef, useState } from 'react';
import Image from 'next/image';

import classes from './contactPage.module.scss';
import Done from './icons/done.png';
import Spinner from './icons/spinner.svg';

function ContactForm() {
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
  const cargoInputRef = useRef('');
  const transportTypeInputRef = useRef('');
  const indexInputRef = useRef('');
  const loadingPlaceInputRef = useRef('');
  const loadingCountryInputRef = useRef('');
  const deliveryPlaceInputRef = useRef('');
  const deliveryCountryInputRef = useRef('');
  const paymentTermsInputRef = useRef('');
  const handleInputRef = useRef('');

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

  function handleSubmit(e) {
    e.preventDefault();

    setLoadingMsg(true);

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMsg = msgInputRef.current.value;
    const enteredCargo = cargoInputRef.current.value;
    const enteredTransportType = transportTypeInputRef.current.value;
    const enteredIndex = indexInputRef.current.value;
    const enteredLoadingPlace = loadingPlaceInputRef.current.value;
    const enteredLoadingCountry = loadingCountryInputRef.current.value;
    const enteredDeliveryPlace = deliveryPlaceInputRef.current.value;
    const enteredDeliveryCountry = deliveryCountryInputRef.current.value;
    const enteredPaymentTerms = paymentTermsInputRef.current.value;
    const enteredHandle = handleInputRef.current.value;

    const FormData = {
      name: enteredName,
      email: enteredEmail,
      msg: enteredMsg,
      cargo: enteredCargo,
      transportType: enteredTransportType,
      index: enteredIndex,
      loadingPlace: enteredLoadingPlace,
      loadingCountry: enteredLoadingCountry,
      deliveryPlace: enteredDeliveryPlace,
      deliveryCountry: enteredDeliveryCountry,
      paymentTerms: enteredPaymentTerms,
      handle: enteredHandle,
    };

    fetch('/api/mailer', {
      method: 'POST',
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((response) => {
        setLoadingMsg(false);
        setSucceedMsg(true);
        const timer = setTimeout(() => {
          setSucceedMsg(false);
        }, 3000);

        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        msgInputRef.current.value = '';
        cargoInputRef.current.value = '';
        transportTypeInputRef.current.value = '';
        indexInputRef.current.value = '';
        loadingPlaceInputRef.current.value = '';
        loadingCountryInputRef.current.value = '';
        deliveryPlaceInputRef.current.value = '';
        paymentTermsInputRef.current.value = '';
        handleInputRef.current.value = '';

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
        console.log(`I'm here`);
        setErrorMsg(true);
        const timer = setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
        return () => clearTimeout(timer);
      });
  }

  return (
    <Fragment>
      <h1 className={classes.h1}>Please contact us</h1>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={`${classes.field}`}>
          <input
            onBlur={(e) => handleBlur(e, 'name')}
            className={`${classes.inputName} ${blure.name && classes.focused}`}
            type="text"
            id="name"
            required
            ref={nameInputRef}
            placeholder="Who Are You?"
          />
          <label className={classes.labelName} htmlFor="name">
            Name
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure.name === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              width={30}
              height={30}
              alt="done"
            />
            <span
              style={{ opacity: `${blure.name === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              check
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
            placeholder="name@email.com"
          />
          <label className={classes.labelEmail} htmlFor="email">
            Email
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure.email === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              alt="done"
              width={30}
              height={30}
            />
            <span
              style={{ opacity: `${blure.email === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              check
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
            placeholder="Your message goes here..."
          />
          <label className={classes.textareaLabel} htmlFor="msg">
            Msg
          </label>
          <div className={classes.checked}>
            <Image
              style={{ opacity: `${blure.msg === true ? 1 : 0}` }}
              className={classes.checked_icon}
              src={Done}
              alt="done"
              width={30}
              height={30}
            />
            <span
              style={{ opacity: `${blure.msg === true ? 1 : 0}` }}
              className={classes.checked_text}
            >
              check
            </span>
          </div>
        </div>

        <p onClick={handleView} className={classes.cargoDetailes}>
          Fill cargo details
        </p>

        {moreLines && (
          <>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'cargo')}
                className={`${classes.inputName} ${blure.cargo && classes.focused}`}
                type="text"
                id="cargo"
                ref={cargoInputRef}
                placeholder="Cargo name"
              />
              <label className={classes.labelName} htmlFor="cargo">
                Cargo
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.cargo === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.cargo === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'transportType')}
                className={`${classes.inputName} ${blure.transportType && classes.focused}`}
                type="text"
                ref={transportTypeInputRef}
                id="transportType"
                placeholder="Vehicle type"
              />
              <label className={classes.labelName} htmlFor="transportType">
                Vehicle
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.transportType === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.transportType === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'index')}
                className={`${classes.inputName} ${blure.index && classes.focused}`}
                type="text"
                id="index"
                ref={indexInputRef}
                placeholder="Loading place(index)"
              />
              <label className={classes.labelName} htmlFor="index">
                Index
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.index === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.index === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'loadingPlace')}
                className={`${classes.inputName} ${blure.loadingPlace && classes.focused}`}
                type="text"
                id="loadingPlace"
                ref={loadingPlaceInputRef}
                placeholder="Loading place(city)"
              />
              <label className={classes.labelName} htmlFor="loadingPlace">
                City
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.loadingPlace === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.loadingPlace === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'loadingCountry')}
                className={`${classes.inputName} ${blure.loadingCountry && classes.focused}`}
                type="text"
                id="loadingCountry"
                ref={loadingCountryInputRef}
                placeholder="Loading place(country)"
              />
              <label className={classes.labelName} htmlFor="loadingCountry">
                State
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.loadingCountry === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.loadingCountry === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'deliveryPlace')}
                className={`${classes.inputName} ${blure.deliveryPlace && classes.focused}`}
                type="text"
                ref={deliveryPlaceInputRef}
                id="deliveryPlace"
                placeholder="Delivery place(city)"
              />
              <label className={classes.labelName} htmlFor="deliveryPlace">
                City
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.deliveryPlace === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.deliveryPlace === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'deliveryCountry')}
                className={`${classes.inputName} ${blure.deliveryCountry && classes.focused}`}
                type="text"
                ref={deliveryCountryInputRef}
                id="deliveryCountry"
                placeholder="Delivery place(country)"
              />
              <label className={classes.labelName} htmlFor="deliveryCountry">
                State
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.deliveryCountry === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.deliveryCountry === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'paymentTerms')}
                className={`${classes.inputName} ${blure.paymentTerms && classes.focused}`}
                type="text"
                ref={paymentTermsInputRef}
                id="paymentTerms"
                placeholder="Payment terms"
              />
              <label className={classes.labelName} htmlFor="paymentTerms">
                Terms
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.paymentTerms === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.paymentTerms === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
            <div className={`${classes.field}`}>
              <input
                onBlur={(e) => handleBlur(e, 'handle')}
                className={`${classes.inputName} ${blure.handle && classes.focused}`}
                type="text"
                ref={handleInputRef}
                id="handle"
                placeholder="When answer needed"
              />
              <label className={classes.labelName} htmlFor="handle">
                Handle
              </label>
              <div className={classes.checked}>
                <Image
                  style={{ opacity: `${blure.handle === true ? 1 : 0}` }}
                  className={classes.checked_icon}
                  src={Done}
                  alt="done"
                  width={30}
                  height={30}
                />
                <span
                  style={{ opacity: `${blure.handle === true ? 1 : 0}` }}
                  className={classes.checked_text}
                >
                  check
                </span>
              </div>
            </div>
          </>
        )}

        <div>
          <button className={classes.button} type="submit">
            Send
          </button>
          <div className={classes.message__wrapper}>
            {loadingMsg && (
              <div className={classes.message}>
                <Image width={40} height={40} alt="spinner" src={Spinner} />
              </div>
            )}
            {errorMsg && (
              <div className={`${classes.message} ${classes.message_error}`}>
                Sending failed, please contact directly
              </div>
            )}
            {succeedMsg && (
              <div className={`${classes.message} ${classes.message_succeed}`}>
                Successfully sent
              </div>
            )}
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default ContactForm;