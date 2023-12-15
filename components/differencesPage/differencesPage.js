'use client';

import { useState } from 'react';
import classes from './differencePage.module.scss';
import DifferenceItem from './differenceItem';

export default function Differences({ messages }) {
  const { h1, differences } = messages;
  const initialState = {};

  Object.entries(differences).map(([id], i) => {
    if (i === 0) {
      return (initialState[id] = true);
    }
    return (initialState[id] = false);
  });

  let images = require.context('../../public/img/differences', true);
  const [showBenefit, setShowBenefit] = useState(initialState);

  function handleView(slide) {
    if (showBenefit[slide]) {
      return;
    }
    setShowBenefit((prevState) => {
      const setAllToFalse = {};
      for (let key in prevState) {
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
