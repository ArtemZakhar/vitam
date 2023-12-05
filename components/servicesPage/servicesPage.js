'use client';
import { useState } from 'react';
import LeftLayout from './leftLayout';
import Cards from './cards';
import Service from './service';

import classes from './servicesPage.module.scss';

import Road from './img/road.jpg';
import Sea from './img/sea.jpg';
import Groupage from './img/groupage.jpg';
import Consulting from './img/consulting.jpg';
import Douane from './img/customs.jpg';
import Contract from './img/contractLogistics.jpg';
import ContactForm from '../contactPage/contactForm';

function ServicesPage({ messages, contactFormMessages }) {
  const initialState = {
    home: true,
    road: false,
    sea: false,
    consult: false,
    customs: false,
    contract: false,
  };
  const [showedInformation, setShowedInformation] = useState(initialState);

  const {
    h1,
    road_Transport,
    sea_Freight,
    gropage,
    consulting,
    customs_services,
    contract_logistics,
  } = messages;

  function handleView(prop) {
    if (showedInformation[prop]) {
      return;
    }

    setShowedInformation((prevState) => {
      const setAllToFalse = Object.keys(prevState).map((key) => {
        return { [key]: false };
      });
      return { ...setAllToFalse, [prop]: true };
    });
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftLayout}>
          <LeftLayout
            handleView={handleView}
            h1={h1}
            road_Transport={road_Transport}
            sea_Freight={sea_Freight}
            gropage={gropage}
            consulting={consulting}
            customs_services={customs_services}
            contract_logistics={contract_logistics}
          />
        </div>
        {showedInformation.home && (
          <div className={classes.cards}>
            <Cards
              Road={Road}
              Sea={Sea}
              Groupage={Groupage}
              Consulting={Consulting}
              Douane={Douane}
              Contract={Contract}
              handleView={handleView}
              messages={messages}
            />
          </div>
        )}
        {showedInformation.road && (
          <div className={classes.cards}>
            <Service img={Road} messages={messages.service.road} handleView={handleView} />
          </div>
        )}
        {showedInformation.sea && (
          <div className={classes.cards}>
            <Service img={Sea} messages={messages.service.sea} handleView={handleView} />
          </div>
        )}
      </div>
      {!showedInformation.home && <ContactForm message={contactFormMessages} />}
    </>
  );
}

export default ServicesPage;
