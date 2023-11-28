import MainPage from '@/components/mainPage/mainPage';
import classes from './page.module.scss';
import { useTranslations } from 'next-intl';
import OrderSteps from '@/components/orderSteps/orderSteps';

export default function Home() {
  const t = useTranslations('MAINPAGE');

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
      <NextIntlClientProvider messages={messages}>
        <OrderSteps />
      </NextIntlClientProvider>
    </main>
  );
}
