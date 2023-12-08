import DifferencesPage from '@/components/differencesPage/differencesPage';
import styles from '../page.module.scss';
import { useMessages } from 'next-intl';

export default function Differences() {
  const messages = useMessages().DIFFERENCEPAGE;
  return (
    <>
      <DifferencesPage messages={messages} />
    </>
  );
}
