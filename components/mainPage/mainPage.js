'use client';

import classes from './mainPage.module.scss';

function MainPage({ messages }) {
  const { the, client, hauler, shipper, forget, because, slogan, h1 } = messages;
  return (
    <>
      <div className={classes.flip}>
        {the}
        <div className={classes.flip__wrapper}>
          <div>
            <div>{client}</div>
          </div>
          <div>
            <div>{shipper}</div>
          </div>
          <div>
            <div>{hauler}</div>
          </div>
        </div>
        {forget}
      </div>
      <div className={classes.tags}>
        {because}
        <div>
          <h2>{slogan}</h2>
        </div>
        <h1>{h1}</h1>
      </div>
    </>
  );
}

export default MainPage;
