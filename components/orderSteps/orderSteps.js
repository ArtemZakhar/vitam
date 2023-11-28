import { useTranslations } from 'next-intl';
import classes from './orderSteps.module.scss';

function OrderSteps({ messages }) {
  const t = useTranslations('MAINPAGE');

  console.log(t);
  return (
    <div className={classes.container}>
      <div className={classes.steps}>
        <div className={classes.steps__wrapper}>
          <div className={classes.steps__step}>
            <div className={classes.steps__step_nuber}>1</div>
            <div className={classes.steps__step_bar}></div>
          </div>
          <div className={classes.steps__step_information}>Send cargo detailes</div>
        </div>
        <div className={classes.steps__wrapper}>
          <div className={classes.steps__step}>
            <div className={classes.steps__step_nuber}>2</div>
            <div className={classes.steps__step_bar}></div>
          </div>
          <div className={classes.steps__step_information}>Price calculating</div>
        </div>
        <div className={classes.steps__wrapper}>
          <div className={classes.steps__step}>
            <div className={classes.steps__step_nuber}>3</div>
            <div className={classes.steps__step_bar}></div>
          </div>
          <div className={classes.steps__step_information}>Possible negotiations</div>
        </div>
        <div className={classes.steps__wrapper}>
          <div className={classes.steps__step}>
            <div className={classes.steps__step_nuber}>4</div>
            <div className={classes.steps__step_bar}></div>
          </div>
          <div className={classes.steps__step_information}>Agreement sign</div>
        </div>
        <div className={classes.steps__wrapper}>
          <div className={classes.steps__step}>
            <div className={classes.steps__step_nuber}>5</div>
            <div className={classes.steps__step_bar}></div>
          </div>
          <div className={classes.steps__step_information}>First shipment</div>
        </div>
      </div>
      <div className={classes.description}></div>
    </div>
  );
}

export default OrderSteps;
