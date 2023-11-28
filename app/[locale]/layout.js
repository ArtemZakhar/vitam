import { Playfair_Display } from 'next/font/google';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

import '../globals.scss';

import Header from '@/components/layout/header';

const inter = Playfair_Display({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'Vitam Ukraine',
  description: 'Надійне міжнародне перевезення вантажів',
  keywords: [
    'Міжнародні перевезення',
    'Транспортно-експедиціна компанія',
    'Вітам',
    'Forwarding company',
    'Forwarding services',
  ],
  authors: [{ name: 'Artem Zakharchuk', url: 'https://artem-zakharchuk-cvnext.vercel.app/' }],
};

const locales = ['uk', 'en'];

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  const t = useTranslations('LAYOUT');

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header
          messages={{
            main: t('main'),
            about: t('about'),
            services: t('services'),
            differences: t('differences'),
            contacts: t('contacts'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
