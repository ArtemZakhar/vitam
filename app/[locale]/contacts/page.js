import ContactForm from '@/components/contactPage/contactForm';
import styles from '../page.module.scss';
import { useMessages } from 'next-intl';

export default function About() {
  const message = useMessages();

  return (
    <main className={styles.main}>
      <ContactForm message={message.CONTACTPAGE} />
    </main>
  );
}
