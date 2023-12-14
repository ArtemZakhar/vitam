'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Partners from './partners';

import classes from './aboutPage.module.scss';

import quote from './img/guillemets_bleu.svg';
import boss from './img/boss.png';
import ValuesList from './valuesList';

export default function AboutPage({ messages }) {
  const { partnersSection, aboutCompanySection } = messages;

  const [absolutePosition, setAbsolutePosition] = useState(true);
  const [topDimensions, setTopDimensions] = useState(0);
  const aboutus = useRef('');

  const scrollHandler = () => {
    const scrollReachedThePlace = aboutus.current.getBoundingClientRect().top;
    if (scrollReachedThePlace <= 430) {
      setAbsolutePosition(false);
      setTopDimensions(Math.floor(scrollReachedThePlace) - 430);
    } else {
      setAbsolutePosition(true);
      setTopDimensions(0);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, [aboutus]);

  const viewMission = absolutePosition ? null : { top: topDimensions };
  const dataForValuesList = Object.entries(aboutCompanySection.values).map(([id, detailes]) => {
    return { id, ...detailes };
  });
  return (
    <div className={classes.container}>
      <div className={classes.mission}>
        <div className={classes.title} style={viewMission}>
          <div className={classes.title_wrapper}>
            <h1>{aboutCompanySection.mission}</h1>
            <p>{aboutCompanySection.mission_descr}</p>
          </div>
        </div>
        <div className={classes.goals__wrapper}>
          <h2>{aboutCompanySection.values_title}</h2>
          <ul>
            <ValuesList messages={dataForValuesList} />
          </ul>
        </div>
      </div>
      <div className={classes.about} ref={aboutus}>
        <div className={classes.description}>{aboutCompanySection.about_company}</div>

        <div className={classes.comment}>
          <div className={classes.wrapper}>
            <div className={classes.text}>
              <Image src={quote} height={30} width={30} alt="quote" />
              <blockquote>{aboutCompanySection.comment}</blockquote>
              <div>
                <p>{aboutCompanySection.name}</p>
                <span>{aboutCompanySection.position}</span>
              </div>
            </div>
            <div className={classes.img}>
              <Image src={boss} alt="boss" />
            </div>
          </div>
        </div>

        <Partners messages={partnersSection} />
      </div>
    </div>
  );
}
