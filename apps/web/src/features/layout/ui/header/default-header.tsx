'use client';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Disclosure } from '@headlessui/react';
import { DefaultHeaderBside } from '@web/features/layout/ui/header/default-header-bside';
import { useLayoutStore } from '@web/features/layout/store/use-layout-store';
import { createNaviList } from '@web/features/layout/ui/header/create-navi-list';

export function DefaultHeader() {
  const { activeNaviKey } = useLayoutStore();
  const navigation = createNaviList();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-2 bg-white rounded-sm">
              <Image
                alt="Your Company"
                src="/next.svg"
                width={394}
                height={80}
                priority
                className="h-4 w-12"
              />
            </div>
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    prefetch={false}
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      item.key === activeNaviKey
                        ? 'bg-gray-200 text-gray-600'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <DefaultHeaderBside />
        </div>
      </div>

      {/* 모바일 메뉴 */}
    </Disclosure>
  );
}
