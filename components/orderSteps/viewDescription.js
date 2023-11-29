import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './orderSteps.module.scss';

function ViewDescription({ arr, activeSteps }) {
  const pathname = usePathname();

  return arr.map(({ id, name, description, linkDescription, link, url }) => {
    const showDescription = activeSteps[id] ? 'block' : 'none';
    const linkToContacts = linkDescription && (
      <div className={classes.steps__description_link}>
        {linkDescription} <br />
        <Link href={`${pathname.slice(0, 3)}${url}`}>{link}</Link>
      </div>
    );
    return (
      <div className={classes.steps__description} style={{ display: showDescription }} key={id}>
        <div className={classes.steps__description_title}>{name}</div>
        <div className={classes.steps__description_info}>{description}</div>
        {linkToContacts}
      </div>
    );
  });
}

export default ViewDescription;
