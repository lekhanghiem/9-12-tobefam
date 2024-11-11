import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
   experimental: {
    serverComponents: false,
     esmExternals: false,
    urlImports: false,
  },
};

export default withNextIntl(nextConfig);
