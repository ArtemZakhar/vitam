'use client';

import { useEffect, useRef } from 'react';
import classes from './aboutPage.module.scss';

export default function AboutPage() {
  const mission = useRef('');
  const aboutus = useRef('');
  /*   function handleScroll(e) {
    console.log(e);
  } */

  const scrollHandler = () => {
    console.log(aboutus.current.getBoundingClientRect().top);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, [ aboutus]);
  return (
    <div className={classes.container}>
      <div className={classes.mission}>
        <div className={classes.title} >
          <h1>Our goal - is to reliably serve the client supply chain.</h1>
          <p>
            We are not transferring information, we are not in-between we are bringing the product
            to the client
          </p>
        </div>
        <div className={classes.goals__wrapper}>
          <h2>Vitam Ukraine team values</h2>
          <ul>
            <li>
              We work for a customer
              <p>
                Everything starts with a customer: he studies demand and determines supply, which
                makes the supply chain possible. Our job affects demand satisfaction that's why it
                has to be qualified.
              </p>
            </li>
            <li>
              Details matter
              <p>
                For us, it is essential to know who is on our team and who our clients and carriers
                are. Trust is very important and we cannot fail.
              </p>
            </li>
            <li>
              To be predictable
              <p>
                All our moves have to be predictable to exclude misunderstanding and to improve
                reliability.
              </p>
            </li>
            <li>
              Be grateful
              <p>
                Don't miss an opportunity to thank for work. Every shipment that proceeds without
                accidents is provided by someone: it can be a client or shipper, carrier or customs
                broker. You should be grateful even if you have not seen a specific attitude.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.about} ref={aboutus}>
        <div className={classes.wrapper}>
          <div className={classes.description}>
            Vitam Ukraine started from scratch at a moment when things changed a lot in the market:
            transportation permissions were run out one month before the year ended. Suddenly it was
            not enough to be reliable, to pay on time and to be a professional. Suddenly it became
            very important to have arguments about why freight prices should be higher in summer and
            lower in winter. Suddenly your experience of reducing the degree of tension with your
            partners had become everyday useful. For the new no-name market player, it was an
            over-complicated task. <br />
            But we passed it without losing partners or reputation. Those trials made our team
            united, more resilient and confident in the positive end of the case on which you put
            enough effort. <br />
            During this short time, the team gained a lot of experience and developed many flexible
            approaches to providing complex logistics services.
          </div>
        </div>
      </div>
    </div>
  );
}
