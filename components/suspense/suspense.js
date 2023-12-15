import Image from 'next/image';
import classes from './suspense.module.scss';
import Spinner from './suspense.svg';

export default function Suspense() {
  return (
    <>
      <div className={classes.wrapper}>
        <Image src={Spinner} fill={true} alt="spinner" />
      </div>
    </>
  );
}
