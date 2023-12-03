'use client';

import classes from './servicesPage.module.scss';

import LeftLayout from './leftLayout';
import Cards from './cards';

function ServicesPage({messages}) {
  const { h1, road_Transport, sea_Freight, gropage, consulting, customs_services, contract_logistics} = messages
  return (
    <div className={classes.container}>
      <div className={classes.leftLayout}>
        <LeftLayout h1={h1} road_Transport={road_Transport} sea_Freight={sea_Freight} gropage={gropage} consulting={consulting} customs_services={customs_services} contract_logistics={contract_logistics}/>
      </div>
      <div className={classes.cards}>
        <Cards messages={messages}/>
      </div>
    </div>
  );
}

export default ServicesPage;
