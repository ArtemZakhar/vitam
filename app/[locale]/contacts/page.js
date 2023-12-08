import ContactForm from '@/components/contactPage/contactForm';
import { useMessages } from 'next-intl';

export default function Contacts() {
  const message = useMessages().CONTACTPAGE;
  return <ContactForm message={message} />;
}
