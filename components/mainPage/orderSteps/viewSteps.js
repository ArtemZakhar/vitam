import { Fragment } from 'react';
import classes from './orderSteps.module.scss';

function ViewSteps({ arr, activeSteps, handleBar }) {
  return arr.map(({ id, name }) => {
    return (
      <Fragment key={id}>
        <div className={classes.steps__item}>
          <div
            className={`${classes.steps__item_number} ${
              activeSteps[id] && classes.steps__item_number_active
            }`}
            onClick={() => handleBar(id)}
          >
            {id}
          </div>
          <div className={classes.steps__item_bar}></div>
          <div
            className={`${classes.steps__item_information} ${
              activeSteps[id] && classes.steps__item_information_active
            }
              `}
          >
            {name}
          </div>
        </div>
      </Fragment>
    );
  });
}

export default ViewSteps;
