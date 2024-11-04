'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const currentPathname = window.location.pathname;
      const newUrl = `/${nextLocale}${currentPathname.replace(`/${localeActive}`, '')}`;
      router.replace(newUrl);
    });
  };

  return (
    <label className="">
      <div className="border-2 border-gray-900 rounded-md">
        <p className="sr-only">Change language</p>
        <select
          defaultValue={localeActive}
          className="bg-transparent py-2"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
        </select>
      </div>
    </label>
  );
}
