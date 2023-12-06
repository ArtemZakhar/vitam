import Image from 'next/image';

import classes from './servicesPage.module.scss';

export default function Cards({
  messages,
  handleView,
  Road,
  Sea,
  Groupage,
  Consulting,
  Douane,
  Contract,
}) {
  const {
    road_Transport,
    sea_Freight,
    gropage,
    consulting,
    customs_services,
    contract_logistics,
    services,
    introduction,
    RT_descr,
    ST_descr,
    groupage_descr,
    consulting_descr,
    customs_descr,
    contract_descr,
  } = messages;
  return (
    <>
      <h2 className={classes.introduction_title}>{services}</h2>
      <div className={classes.introduction}>{introduction}</div>
      <div className={classes.services}>
        <div className={classes.services__item} onClick={handleView.bind(this, 'road')}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Road} className={classes.services__item_img} alt="road" />
          </div>
          <div className={classes.services__item_title}>{road_Transport}</div>
          <div className={classes.services__item_description}>{RT_descr}</div>
        </div>
        <div className={classes.services__item} onClick={handleView.bind(this, 'sea')}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Sea} className={classes.services__item_img} alt="sea" />
          </div>
          <div className={classes.services__item_title}>{sea_Freight}</div>
          <div className={classes.services__item_description}>{ST_descr}</div>
        </div>
        <div className={classes.services__item} onClick={handleView.bind(this, 'groupage')}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Groupage} className={classes.services__item_img} alt="group" />
          </div>
          <div className={classes.services__item_title}>{gropage}</div>
          <div className={classes.services__item_description}>{groupage_descr}</div>
        </div>
        <div className={classes.services__item} onClick={handleView.bind(this, 'consult')}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Consulting} className={classes.services__item_img} alt="consulting" />
          </div>
          <div className={classes.services__item_title}>{consulting}</div>
          <div className={classes.services__item_description}>{consulting_descr}</div>
        </div>
        <div className={classes.services__item} onClick={handleView.bind(this, 'customs_services')}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Douane} className={classes.services__item_img} alt="customs_services" />
          </div>
          <div className={classes.services__item_title}>{customs_services}</div>
          <div className={classes.services__item_description}>{customs_descr}</div>
        </div>
        <div className={classes.services__item} onClick={handleView.bind(this, 'contract')}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Contract} className={classes.services__item_img} alt="contract_logistics" />
          </div>
          <div className={classes.services__item_title}>{contract_logistics}</div>
          <div className={classes.services__item_description}>{contract_descr}.</div>
        </div>
      </div>
    </>
  );
}
