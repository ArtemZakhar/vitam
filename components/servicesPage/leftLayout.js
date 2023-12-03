import classes from './servicesPage.module.scss';

function LeftLayout() {
  return (
    <div className={classes.layout}>
      <h2>Our services:</h2>
      <div className={classes.layout__wrapper}>
        <div className={classes.layout__item}>Road Transport</div>
        <div className={classes.layout__item}>Sea Freight</div>
        <div className={classes.layout__item}>Gropage transportation</div>
        <div className={classes.layout__item}>Consulting</div>
        <div className={classes.layout__item}>Customs services</div>
        <div className={classes.layout__item}>Contract logistics</div>
      </div>
    </div>
  );
}

export default LeftLayout;
