import ServicesPage from '@/components/servicesPage/servicesPage';
import { useMessages } from 'next-intl';

export default function OurServices() {
  const messages = useMessages();
  return <ServicesPage messages={messages.SERVICEPAGE} />;
}
