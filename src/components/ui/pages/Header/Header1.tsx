import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Header1 = () => {
  const t = useTranslations('All');

  return (
    <div>
        <div className="flex lg:flex-row flex-col justify-between bgheader py-3 lg:px-20 px-10 w-full gap-y-3">
        <nav className="grid grid-cols-3 gap-3 lg:gap-10">
          {[
            ['/img/header/Vector.svg', t('Download the application')],
            ['/img/header/Union.svg', t('Notification')],
            ['/img/header/Group1.svg', t('Support')],
          ].map(([imgSrc, text], index) => (
            <div key={index} className="flex gap-4 justify-center hover:scale-110">
              <Image src={imgSrc} alt={text} width={30} height={30} />
              <div className="flex items-center">{text}</div>
            </div>
          ))}
        </nav>

        {/* Desktop Navigation */}
        <nav className="lg:gap-20 gap-10 grid-cols-3 hidden lg:flex">
          {[
            ['#', '/img/header/Subtract.svg'],
            ['#', '/img/header/Group2.svg'],
            ['#', '/img/header/Subtract1.svg'],
          ].map(([url, img], index) => (
            <div key={index} className="items-center gap-4 hover:scale-110">
              <Link href={url}>
                <Image src={img} alt="icon" width={30} height={30} />
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header1