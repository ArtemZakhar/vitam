import Image from 'next/image';
import classes from './servicesPage.module.scss';
import ContactForm from '../contactPage/contactForm';

export default function Service({ handleView, img, messages }) {
  const {
    generalDescription,
    cargo_types,
    cargo_types_descr,
    vehicle,
    vehicle_descr,
    benefits,
    benefits_descr,
  } = messages;
  return (
    <>
      <div className={classes.cards__item}>
        <div className={classes.cards__item_back} onClick={handleView.bind(this, 'home')}>
          Back
        </div>
        <div className={classes.cards__item__generalDescription}>
          <div className={classes.cards__item__generalDescription__img_wrapper}>
            <Image
              className={classes.cards__item__generalDescription__img}
              src={img}
              alt="service"
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
    </>
  );
}
