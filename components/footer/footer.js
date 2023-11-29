import Image from 'next/image';

import classes from './footer.module.scss';

import addressImg from './icons/icon-address.png';
import telImg from './icons/icon-phone.png';
import emailImg from './icons/icon-mail.png';

function Footer({ messages }) {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__icon}>
            <Image src={addressImg} width={13} height={17} alt="Address" />
          </div>
          <div className={classes.footer__info}>{messages.address}</div>
        </div>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__icon}>
            <Image src={telImg} width={13} height={13} alt="tel" />
          </div>
          <a href="tel:+380443383018" className={classes.footer__info}>
            {messages.tel}
          </a>
        </div>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__icon}>
            <Image src={emailImg} width={15} height={11} alt="tel" />
          </div>
          <a href="mailto:info@vitam.com.ua" className={classes.footer__info}>
            {messages.mail}
          </a>
        </div>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__info}>{messages.rights}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
