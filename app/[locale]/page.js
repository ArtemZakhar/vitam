import { useTranslations } from 'next-intl';
import { useMessages } from 'next-intl';
import MainPage from '@/components/mainPage/mainPage';
import OrderSteps from '@/components/mainPage/orderSteps/orderSteps';
import classes from './page.module.scss';

export default function Home() {
  const t = useTranslations('MAINPAGE');
  const messages = useMessages().MAINPAGE.steps;

  return (
    <main className={classes.main}>
      <MainPage
        messages={{
          the: t('the'),
          client: t('Client'),
          hauler: t('Hauler'),
          shipper: t('Shipper'),
          forget: t('forget'),
          because: t('because'),
          slogan: t('slogan'),
          h1: t('h1'),
        }}
      />
      <OrderSteps title={t('steps_title')} messages={messages} />
    </main>
  );
}
