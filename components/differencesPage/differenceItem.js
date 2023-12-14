import Image from 'next/image';
import classes from './differencePage.module.scss';

export default function DifferenceItem({ messages, handleView, showBenefit }) {
  function viewDifferences(diffArray) {
    const info = diffArray.map((difference) => {
      const { id, name, context, img } = difference;
      let images = require.context('../../public/img/differences', true);
      const bg = images(`./${img}.jpg`).default;
      let icons = require.context('../../public/img/differences/icons', true);
      const icon = icons(`./${img}.png`).default;

      return (
        <div
          key={id}
          onClick={handleView.bind(this, `${id}`)}
          className={`${classes.difference} ${showBenefit[id] && classes.active}`}
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className={classes.shadow}></div>
          <div className={classes.label}>
            <div className={classes.icon}>
              <Image src={icon.src} width={40} height={40} alt="search" />
            </div>
            <div className={classes.info}>
              <div className={classes.title}>{name}</div>
              <div className={classes.description}>{context}</div>
            </div>
          </div>
        </div>
      );
    });
    return info;
  }

  const elements = viewDifferences(messages);

  return <>{elements}</>;
}
