import Image from 'next/image';
import classes from './servicesPage.module.scss';
import ContactForm from '../contactPage/contactForm';
import { Fragment } from 'react';

export default function Service({ handleView, showedInformation, messages }) {
  function viewServices(services) {
    return services.map((item) => {
      const {
        id,
        generalDescription,
        cargo_types,
        cargo_types_descr,
        vehicle,
        vehicle_descr,
        benefits,
        benefits_descr,
      } = item;
      const images = require.context('../../public/img/servicePage', true);
      const image = images(`./${id}.jpg`).default;

      return (
        <Fragment key={id}>
          {showedInformation[id] && (
            <div className={classes.cards__item}>
              <div className={classes.cards__item_back} onClick={handleView.bind(this, 'home')}>
                Back
              </div>
              <div className={classes.cards__item__generalDescription}>
                <div className={classes.cards__item__generalDescription__img_wrapper}>
                  <Image
                    className={classes.cards__item__generalDescription__img}
                    src={image.src}
                    width={820}
                    height={300}
                    alt={id}
                  />
                </div>
                <p>{generalDescription}</p>
              </div>
              <div className={classes.cards__item__wrapper}>
                <div className={classes.cards__item__title}>{cargo_types}</div>
                <div className={classes.cards__item__description}>{cargo_types_descr}</div>
              </div>
              <div className={classes.cards__item__wrapper}>
                <div className={classes.cards__item__title}>{vehicle}</div>
                <div className={classes.cards__item__description}>{vehicle_descr}</div>
              </div>
              <div className={classes.cards__item__wrapper}>
                <div className={classes.cards__item__title}>{benefits}</div>
                <div className={classes.cards__item__description}>{benefits_descr}</div>
              </div>
            </div>
          )}
        </Fragment>
      );
    });
  }

  const elements = viewServices(messages);

  return <>{elements}</>;
}
