'use client';

import { useState } from 'react';

import classes from './orderSteps.module.scss';
import ViewDescription from './viewDescription';
import ViewSteps from './viewSteps';

function OrderSteps({ messages, title }) {
  const initialState = {
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  };

  const [activeSteps, setActiveSteps] = useState(initialState);

  const iterableArray = Object.entries(messages).map(([step, data]) => {
    return { step, ...data };
  });

  function handleBar(id) {
    if (activeSteps[id]) {
      return;
    }
    setActiveSteps((prewSteps) => {
      const setAllToFalse = prewSteps;
      for (let key of Object.keys(setAllToFalse)) {
        setAllToFalse[key] = false;
      }
      return { ...setAllToFalse, [id]: true };
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.steps}>
        <div className={classes.steps__title}>{title}</div>
        <div className={classes.steps__wrapper}>
          <ViewSteps activeSteps={activeSteps} arr={iterableArray} handleBar={handleBar} />
        </div>
        <ViewDescription arr={iterableArray} activeSteps={activeSteps} />
      </div>
    </div>
  );
}

export default OrderSteps;
