import Image from 'next/image';

import classes from './servicesPage.module.scss';

export default function Cards({ messages, handleView, services, introduction }) {
  function viewCards(cards) {
    return cards.map((card) => {
      const { id, service, description } = card;
      const images = require.context('../../public/img/servicePage', true);
      const image = images(`./${id}.jpg`).default;
      return (
        <div className={classes.services__item} onClick={handleView.bind(this, `${id}`)} key={id}>
          <div className={classes.services__item_img_wrapper}>
            <Image
              src={image.src}
              width={210}
              height={140}
              className={classes.services__item_img}
              alt={id}
            />
          </div>
          <div className={classes.services__item_title}>{service}</div>
          <div className={classes.services__item_description}>{description}</div>
        </div>
      );
    });
  }
  const elements = viewCards(messages);
  return (
    <>
      <h2 className={classes.introduction_title}>{services}</h2>
      <div className={classes.introduction}>{introduction}</div>
      <div className={classes.services}>{elements}</div>
    </>
  );
}
