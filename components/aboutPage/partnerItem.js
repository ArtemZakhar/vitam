import Image from 'next/image';
import classes from './aboutPage.module.scss';

export default function PartnerItem({ messages, hover, handleMouseEnter, handleMouseleave }) {
  function viewPartners(partners) {
    const listOfPartners = partners.map((partner) => {
      const { id, descr } = partner;
      let images = require.context('../../public/img/partners', true);
      const partnerImage = images(`./${id}.png`).default;
      return (
        <div
          key={id}
          className={`${classes.item} ${hover[id] && classes.active}`}
          onMouseEnter={handleMouseEnter.bind(this, `${id}`)}
          onMouseLeave={handleMouseleave}
        >
          <Image src={partnerImage.src} width={150} height={100} alt={id} />
          <span>{descr}</span>
        </div>
      );
    });
    return listOfPartners;
  }

  const elements = viewPartners(messages);

  return <>{elements}</>;
}
