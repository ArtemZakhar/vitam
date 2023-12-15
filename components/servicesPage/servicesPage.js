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
    groupage: false,
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
      const setAllToFalse = {};
      for (let key in prevState) {
        setAllToFalse[key] = false;
      }
      return { ...setAllToFalse, [prop]: true };
    });
    document.querySelector('body').scrollTo(0, 0);
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
        {showedInformation.groupage && (
          <div className={classes.cards}>
            <Service img={Groupage} messages={messages.service.groupage} handleView={handleView} />
          </div>
        )}
        {showedInformation.consult && (
          <div className={classes.cards}>
            <Service
              img={Consulting}
              messages={messages.service.consulting}
              handleView={handleView}
            />
          </div>
        )}
        {showedInformation.customs_services && (
          <div className={classes.cards}>
            <Service
              img={Douane}
              messages={messages.service.customs_services}
              handleView={handleView}
            />
          </div>
        )}
        {showedInformation.contract && (
          <div className={classes.cards}>
            <Service
              img={Contract}
              messages={messages.service.contract_logistics}
              handleView={handleView}
            />
          </div>
        )}
      </div>
      {!showedInformation.home && <ContactForm message={contactFormMessages} />}
    </>
  );
}

export default ServicesPage;
