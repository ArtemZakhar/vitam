import classes from './servicesPage.module.scss';

function LeftLayout({
  handleView,
  h1,
  road_Transport,
  sea_Freight,
  gropage,
  consulting,
  customs_services,
  contract_logistics,
}) {
  return (
    <div className={classes.layout}>
      <h1>{h1}</h1>
      <div className={classes.layout__wrapper}>
        <div className={classes.layout__item} onClick={handleView.bind(this, 'road')}>
          {road_Transport}
        </div>
        <div className={classes.layout__item} onClick={handleView.bind(this, 'sea')}>
          {sea_Freight}
        </div>
        <div className={classes.layout__item}>{gropage}</div>
        <div className={classes.layout__item}>{consulting}</div>
        <div className={classes.layout__item}>{customs_services}</div>
        <div className={classes.layout__item}>{contract_logistics}</div>
      </div>
    </div>
  );
}

export default LeftLayout;
