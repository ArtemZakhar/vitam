import AboutPage from '@/components/aboutPage/aboutPage';
import { useMessages } from 'next-intl';

export default function About() {
  const messages = useMessages().ABOUTUSPAGE;
  return <AboutPage messages={messages} />;
}
