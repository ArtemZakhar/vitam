'use client';

import Image from 'next/image';

import classes from './footer.module.scss';

import addressImg from './icons/icon-address.png';
import telImg from './icons/icon-phone.png';
import emailImg from './icons/icon-mail.png';
import { useState } from 'react';

function Footer({ messages }) {
  const [showMap, SetShowMap] = useState(false);

  function handleMapView() {
    showMap ? SetShowMap(false) : SetShowMap(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__icon}>
            <Image src={addressImg} width={13} height={17} alt="Address" />
          </div>
          <div onClick={handleMapView} className={classes.footer__info}>
            {messages.address}
          </div>
        </div>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__icon}>
            <Image src={telImg} width={13} height={13} alt="tel" />
          </div>
          <a href="tel:+380443383018" className={classes.footer__info}>
            {messages.tel}
          </a>
        </div>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__icon}>
            <Image src={emailImg} width={15} height={11} alt="tel" />
          </div>
          <a href="mailto:info@vitam.com.ua" className={classes.footer__info}>
            {messages.mail}
          </a>
        </div>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__info}>{messages.rights}</div>
        </div>
      </div>
      {showMap && (
        <div onClick={handleMapView} className={classes.map}>
          <button onClick={handleMapView}>+</button>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6590696176554!2d30.500501315153688!3d50.42882339680495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cee6cd53ac69%3A0x445be7f57488bae3!2z0KTQhtCcINCm0LXQvdGC0YA!5e0!3m2!1suk!2sua!4v1673589746794!5m2!1suk!2sua"
            style={{ border: 0 }}
            fullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Footer;
