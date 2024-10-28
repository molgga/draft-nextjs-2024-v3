import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useAuthUser } from '@web/features/auth/hooks/use-auth-user';

export function DefaultHeaderBside() {
  const authUser = useAuthUser();

  const userNavigation = [
    { name: '마이페이지', href: '#' },
    { name: '로그아웃', href: '/auth/logout' },
  ];

  return (
    <div className="block">
      <div className="ml-4 flex items-center">
        {authUser.isLogined ? (
          <>
            {/* <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button> */}

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex p-2 pl-4 max-w-xs items-center rounded-full text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <div className="relative w-6 h-6 -left-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-8 h-8 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">메뉴 열기</span>
                  <div className="">{authUser.sessionUser.userName}</div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </>
        ) : (
          <Link
            prefetch={false}
            className="relative rounded-full bg-gray-800 p-1 text-sm text-gray-200 hover:text-white"
            href="/auth/login"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
}
