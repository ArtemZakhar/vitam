'use client';

import { useState } from 'react';
import Image from 'next/image';
import classes from './differencePage.module.scss';
import monitoringImg from './img/features-01.png';
import reportImg from './img/features-02.png';
import alwaysImg from './img/features-03.png';
import portfolioImg from './img/features-04.png';
import competitionImg from './img/features-05.png';

export default function Differences({ messages }) {
  const {
    h1,
    monitoring,
    monitoring_context,
    report,
    report_context,
    always,
    always_context,
    portfolio,
    portfolio_context,
    competition,
    competition_context,
  } = messages;

  const initialState = {
    monitoring: true,
    report: false,
    always: false,
    portfolio: false,
    competition: false,
  };

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
  return (
    <div className={classes.container}>
      <h1>{h1}</h1>
      <div
        onClick={handleView.bind(this, 'monitoring')}
        className={`${classes.difference} ${showBenefit.monitoring && classes.active}`}
        style={{ backgroundImage: `url(/differences/monitoring.jpg)` }}
      >
        <div className={classes.shadow}></div>
        <div className={classes.label}>
          <div className={classes.icon}>
            <Image src={monitoringImg} width={40} height={40} alt="search" />
          </div>
          <div className={classes.info}>
            <div className={classes.title}>{monitoring}</div>
            <div className={classes.description}>{monitoring_context}</div>
          </div>
        </div>
      </div>
      <div
        onClick={handleView.bind(this, 'report')}
        className={`${classes.difference} ${showBenefit.report && classes.active}`}
        style={{ backgroundImage: `url(/differences/reporting.jpg)` }}
      >
        <div className={classes.shadow}></div>
        <div className={classes.label}>
          <div className={classes.icon}>
            <Image src={reportImg} width={40} height={40} alt="report" />
          </div>
          <div className={classes.info}>
            <div className={classes.title}>{report}</div>
            <div className={classes.description}>{report_context}</div>
          </div>
        </div>
      </div>
      <div
        onClick={handleView.bind(this, 'always')}
        className={`${classes.difference} ${showBenefit.always && classes.active}`}
        style={{ backgroundImage: `url(/differences/24.7.jpg)` }}
      >
        <div className={classes.shadow}></div>
        <div className={classes.label}>
          <div className={classes.icon}>
            <Image src={alwaysImg} width={40} height={40} alt="always" />
          </div>
          <div className={classes.info}>
            <div className={classes.title}>{always}</div>
            <div className={classes.description}>{always_context}</div>
          </div>
        </div>
      </div>
      <div
        onClick={handleView.bind(this, 'portfolio')}
        className={`${classes.difference} ${showBenefit.portfolio && classes.active}`}
        style={{ backgroundImage: `url(/differences/portfolio.jpg)` }}
      >
        <div className={classes.shadow}></div>
        <div className={classes.label}>
          <div className={classes.icon}>
            <Image src={portfolioImg} width={40} height={40} alt="portfolio" />
          </div>
          <div className={classes.info}>
            <div className={classes.title}>{portfolio}</div>
            <div className={classes.description}>{portfolio_context}</div>
          </div>
        </div>
      </div>
      <div
        onClick={handleView.bind(this, 'competition')}
        className={`${classes.difference} ${showBenefit.competition && classes.active}`}
        style={{ backgroundImage: `url(/differences/competition.jpg)` }}
      >
        <div className={classes.shadow}></div>
        <div className={classes.label}>
          <div className={classes.icon}>
            <Image src={competitionImg} width={40} height={40} alt="competition" />
          </div>
          <div className={classes.info}>
            <div className={classes.title}>{competition}</div>
            <div className={classes.description}>{competition_context}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
