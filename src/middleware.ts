import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'vi'],

  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/lienhe',
    '/verify',
    '/login',
    '/register',
    '/listproduct',
    '/areaList',
    '/profile',
    '/user',
    '/user/listproduct',
    '/user/stampManegement',
    '/user/theStamp',
    '/seek',
    '/benefit',
    '/solution',


    '/(vi|en)/:path*',
  ],
};