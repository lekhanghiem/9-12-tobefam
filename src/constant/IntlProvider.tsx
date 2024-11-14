// src/components/IntlProvider.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';


const IntlProvider =  ({
  children,
  params: { locale },

}: Readonly<{
  children: React.ReactNode;
  params: { locale: any };

}>) => {

  return (
     <html lang={locale}>
    <NextIntlClientProvider >
      {children}
    </NextIntlClientProvider>
    </html>
  );
};

export default IntlProvider;
