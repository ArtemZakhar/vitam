'use client';
import { useState } from 'react';
import LeftLayout from './leftLayout';
import Cards from './cards';
import Service from './service';

import classes from './servicesPage.module.scss';

import ContactForm from '../contactPage/contactForm';

function ServicesPage({ messages, contactFormMessages }) {
  const initialState = {
    home: true,
  };
  const [showedInformation, setShowedInformation] = useState(initialState);
  const { h1, services, introduction, cards, service } = messages;

  Object.keys(cards).forEach((item) => {
    initialState[item] = false;
  });

  function handleView(prop) {
    if (showedInformation[prop]) {
      return;
    }

    setShowedInformation((prevState) => {
      const setAllToFalse = {};
      for (let key in prevState) {
        setAllToFalse[key] = false;
      }
      return { ...setAllToFalse, [prop]: true };
    });
    document.querySelector('body').scrollTo(0, 0);
  }

  const dataForCards = Object.entries(cards).map(([id, body]) => {
    return { id, ...body };
  });

  const dataForServices = Object.entries(service).map(([id, body]) => {
    return { id, ...body };
  });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftLayout}>
          <LeftLayout handleView={handleView} h1={h1} messages={dataForCards} />
        </div>
        {showedInformation.home && (
          <div className={classes.cards}>
            <Cards
              handleView={handleView}
              messages={dataForCards}
              services={services}
              introduction={introduction}
            />
          </div>
        )}
        {!showedInformation.home && (
          <div className={classes.cards}>
            <Service
              messages={dataForServices}
              handleView={handleView}
              showedInformation={showedInformation}
            />
          </div>
        )}
      </div>
      {!showedInformation.home && <ContactForm message={contactFormMessages} />}
    </>
  );
}

export default ServicesPage;
