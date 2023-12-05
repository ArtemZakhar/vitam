import ServicesPage from '@/components/servicesPage/servicesPage';
import { useMessages } from 'next-intl';

export default function OurServices() {
  const messages = useMessages().SERVICEPAGE;
  const contactFormMessages = useMessages().CONTACTPAGE;

  return <ServicesPage messages={messages} contactFormMessages={contactFormMessages}/>;
}
