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

  const iterableArray = Object.entries(messages).map(([id, data]) => {
    return { id, ...data };
  });

  function handleBar(id) {
    if (activeSteps[id]) {
      return;
    }
    setActiveSteps((prewSteps) => {
      const step = Number(
        Object.keys(prewSteps).filter((key) => {
          return Number(key) === id;
        })
      );

      return { 1: false, 2: false, 3: false, 4: false, 5: false, [step]: !prewSteps[step] };
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
