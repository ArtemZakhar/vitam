'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from '../../navigation';

import classes from './header.module.scss';

function Header({ messages }) {
  const router = useRouter();
  const pathname = usePathname();
  const { main, about, services, differences, contacts } = messages;

  function handleLanguege(locale) {
    router.push(`/${pathname.slice(4)}`, { locale: locale });
  }
  return (
    <div className={classes.container}>
      <Link className={classes.header__logo} href="/">
        <Image
          src="/logo.png"
          width={150}
          height={100}
          style={{ display: 'block', position: 'relative', width: '100%', height: '100%' }}
          alt="vitam logo"
        />
      </Link>
      <div className={classes.navigation_block}>
        <div className={classes.hamburger_menu}>
          <div className={`${classes.bar} ${classes.upper_bar}`}></div>
          <div className={`${classes.bar} ${classes.middle_bar}`}></div>
          <div className={`${classes.bar} ${classes.lower_bar}`}></div>
        </div>
        <div className={classes.menu_list}>
          <ul>
            <li>
              <Link href="/">{main}</Link>
            </li>
            <li>
              <Link href={`${pathname.slice(0, 3)}/about`}>{about}</Link>
            </li>
            <li>
              <Link href={`${pathname.slice(0, 3)}/ourservices`}> {services}</Link>
            </li>
            <li>
              <Link href={`${pathname.slice(0, 3)}/differences`}> {differences}</Link>
            </li>
            <li>
              <Link href={`${pathname.slice(0, 3)}/contacts`}> {contacts}</Link>
            </li>
          </ul>
          <div className={classes.menu_list_lng}>
            <button onClick={() => handleLanguege('uk')}>UA</button>
            <button onClick={() => handleLanguege('en')}>EN</button>
          </div>
        </div>
        <div className={classes.menu_background}></div>
      </div>
    </div>
  );
}

export default Header;
