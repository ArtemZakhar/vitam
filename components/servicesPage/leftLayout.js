import classes from './servicesPage.module.scss';

function LeftLayout({ handleView, h1, messages }) {
  function viewLayout(lines) {
    return lines.map((line) => {
      const { id, service } = line;
      return (
        <div className={classes.layout__item} key={id} onClick={handleView.bind(this, `${id}`)}>
          {service}
        </div>
      );
    });
  }

  const elements = viewLayout(messages);
  return (
    <div className={classes.layout}>
      <h1>{h1}</h1>
      <div className={classes.layout__wrapper}>{elements}</div>
    </div>
  );
}

export default LeftLayout;
