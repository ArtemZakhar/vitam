import Image from 'next/image';
import Road from './img/services-auto.png';
import Sea from './img/services-ship.png';
import Groupage from './img/groupage.jpg';
import Consulting from './img/consulting.jpg';
import Douane from './img/customs.jpg';
import Contract from './img/contractLogistics.jpg'

import classes from './servicesPage.module.scss';

export default function Cards() {
  return (
    <>
      <div className={classes.introduction}>
        Vitamin Ukraine at the early beginning were focused on transporting cargo that needed
        temperature conditions or had a short expiration date, dangerous cargo, and FMCG. For these
        short 7 years company has built strong reliable team, has earned the name of a very
        responsible partner and on this background, we confidently look to the future expansion of
        the client base and new directions of service provision.
      </div>
      <div className={classes.services}>
        <div className={classes.services__item}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Road} className={classes.services__item_img} alt="road" />
          </div>
          <div className={classes.services__item_title}>Road Transport</div>
          <div className={classes.services__item_description}>
            Road transportation is, for many businesses and suppliers, still the most beneficial
            means of transporting goods.
          </div>
        </div>
        <div className={classes.services__item}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Sea} className={classes.services__item_img} alt="sea" />
          </div>
          <div className={classes.services__item_title}>Sea Freight</div>
          <div className={classes.services__item_description}>
            A key and integral part of the supply chain for much of the industry.
          </div>
        </div>
        <div className={classes.services__item}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Groupage} className={classes.services__item_img} alt="group" />
          </div>
          <div className={classes.services__item_title}>Groupage</div>
          <div className={classes.services__item_description}>
            Profitable approach for those who send small consignments.
          </div>
        </div>
        <div className={classes.services__item}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Consulting} className={classes.services__item_img} alt="consulting" />
          </div>
          <div className={classes.services__item_title}>Consulting</div>
          <div className={classes.services__item_description}>
            We share our knowledge and skills with pleasure.
          </div>
        </div>
        <div className={classes.services__item}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Douane} className={classes.services__item_img} alt="consulting" />
          </div>
          <div className={classes.services__item_title}>Consulting</div>
          <div className={classes.services__item_description}>
            We are providing customs clearance services all over Europe and in Ukraine.
          </div>
        </div>        
        <div className={classes.services__item}>
          <div className={classes.services__item_img_wrapper}>
            <Image src={Contract} className={classes.services__item_img} alt="consulting" />
          </div>
          <div className={classes.services__item_title}>Contract logistics</div>
          <div className={classes.services__item_description}>
            We are providing customs clearance services all over Europe and in Ukraine.
          </div>
        </div>
      </div>
    </>
  );
}
