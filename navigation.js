import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['uk', 'en'];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
});
