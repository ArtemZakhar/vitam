'use client';

import classes from './servicesPage.module.scss';

import LeftLayout from './leftLayout';
import Cards from './cards';

function ServicesPage() {
  return (
    <div className={classes.container}>
      <div className={classes.leftLayout}>
        <LeftLayout />
      </div>
      <div className={classes.cards}>
        <Cards />
      </div>
    </div>
  );
}

export default ServicesPage;
