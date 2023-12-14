'use client';

import { useState } from 'react';
import classes from './differencePage.module.scss';
import DifferenceItem from './differenceItem';

export default function Differences({ messages }) {
  const { h1, differences } = messages;

  const initialState = {
    monitoring: true,
    report: false,
    always: false,
    portfolio: false,
    competition: false,
  };

  let images = require.context('../../public/img/differences', true);
  const [showBenefit, setShowBenefit] = useState(initialState);

  function handleView(slide) {
    if (showBenefit[slide]) {
      return;
    }
    setShowBenefit((prevState) => {
      const setAllToFalse = prevState;
      for (let key in setAllToFalse) {
        setAllToFalse[key] = false;
      }
      return { ...setAllToFalse, [slide]: true };
    });
  }

  const dataForDifferenceItem = Object.entries(differences).map(([id, information]) => {
    return { id, ...information };
  });

  return (
    <div className={classes.container}>
      <h1>{h1}</h1>
      <DifferenceItem
        handleView={handleView}
        showBenefit={showBenefit}
        messages={dataForDifferenceItem}
      />
    </div>
  );
}
