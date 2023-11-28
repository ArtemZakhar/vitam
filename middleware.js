import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

export default createMiddleware({
  // locales: ['uk', 'en'],
  locales,
  defaultLocale: 'uk',
  localeDetection: false,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(uk|en)/:path*'],
};
