'use client';
import { LogIn, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from '@ui/components/ui/sidebar';
import { createNaviList } from '@web/features/layout/model/create-navi-list';
import { useAuthUser } from '@web/features/auth/hooks/use-auth-user';
import { NaviOneMenu } from './navi-one-menu';

export function DefaultAside() {
  const naviList = createNaviList();
  const authUser = useAuthUser();
  const router = useRouter();

  const handleLogout = () => {
    location.href = '/auth/logout';
  };

  const handleLogin = () => {
    router.push('/auth/login');
  };

  return (
    <Sidebar>
      <div style={{ position: 'absolute', bottom: '18px', right: '-30px' }}>
        <SidebarTrigger />
      </div>
      <SidebarHeader>
        <Link prefetch={false} href="/">
          SidebarHeader
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {naviList.mainList.map((main) => {
          return <NaviOneMenu key={main.key} model={main} />;
        })}
      </SidebarContent>
      <SidebarFooter>
        {authUser.isLogined ? (
          <div className="ui-flex ui-items-center ui-justify-between ui-p-2 ui-text-sm">
            <span className="ui-flex-1">{authUser.sessionUser.userName}</span>
            <Button variant="outline" size="xs" onClick={handleLogout}>
              <LogOut />
              로그아웃
            </Button>
          </div>
        ) : (
          <div className="ui-flex ui-items-center ui-justify-between ui-p-2 ui-text-sm">
            <span className="ui-flex-1">&nbsp;</span>
            <Button variant="outline" size="xs" onClick={handleLogin}>
              <LogIn />
              <span className="ui-flex-1">로그인</span>
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
