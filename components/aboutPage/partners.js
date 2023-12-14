import { useEffect, useState } from 'react';
import PartnerItem from './partnerItem';

import classes from './aboutPage.module.scss';

export default function Partners({ messages }) {
  const { trust, slider } = messages;

  const array = Object.entries(slider).map(([id]) => {
    return [id, false];
  });
  const initialState = Object.fromEntries(array);
  const initialStateForData = Object.entries(slider).map(([name, description]) => {
    return { ...description, id: name };
  });

  const [hoverCards, setHoverCards] = useState(initialState);
  const [hoverSection, setHoverSection] = useState(false);
  const [dataForPartnerItemComponent, setDataForPartnerItemComponent] =
    useState(initialStateForData);

  useEffect(() => {
    if (hoverSection) return;
    const interval = setInterval(function () {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [dataForPartnerItemComponent, hoverSection]);

  function handleMouseEnter(card) {
    setHoverCards((prevState) => {
      return { ...prevState, [card]: true };
    });
  }

  function handleMouseleave() {
    setHoverCards((prevState) => {
      const setAllToFalse = prevState;
      for (let key of Object.keys(setAllToFalse)) {
        setAllToFalse[key] = false;
      }
      return { ...setAllToFalse };
    });
  }

  function nextSlide() {
    setDataForPartnerItemComponent((prevState) => {
      const firstElement = prevState.slice(0, 1);
      const restElements = prevState.slice(1);
      const newArray = [...restElements, ...firstElement];
      return newArray;
    });
  }

  function prevSlide() {
    setDataForPartnerItemComponent((prevState) => {
      const slideLength = prevState.length;
      const lastElement = prevState.slice(-1);
      const restElements = prevState.slice(0, slideLength - 1);
      const newArray = [...lastElement, ...restElements];
      return newArray;
    });
  }

  function handleStopTimer() {
    setHoverSection(true);
  }

  function handleStartTimer() {
    setHoverSection(false);
  }

  return (
    <div
      className={classes.partners}
      onMouseLeave={handleStartTimer}
      onMouseEnter={handleStopTimer}
    >
      <div className={classes.partners__nav}>
        <div className={classes.subtitle}>{trust}</div>
        <div className={classes.btns}>
          <button type="button" onClick={prevSlide} className={classes.showup_prev}>
            <div className="play__content">
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path opacity="0.5" d="M0 5.5L9 11V0L0 5.5Z" fill="white"></path>
              </svg>
            </div>
          </button>
          <button type="button" onClick={nextSlide} className={classes.showup_next}>
            <div className="play__content">
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path opacity="0.5" d="M9 5.5L0 11V0L9 5.5Z" fill="white"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className={classes.slider}>
        <div className={classes.wrapper}>
          <PartnerItem
            hover={hoverCards}
            messages={dataForPartnerItemComponent}
            handleMouseEnter={handleMouseEnter}
            handleMouseleave={handleMouseleave}
          />
        </div>
      </div>
    </div>
  );
}
