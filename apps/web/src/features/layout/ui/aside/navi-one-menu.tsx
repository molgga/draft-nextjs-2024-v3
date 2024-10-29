'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronsUpDown, Minus } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@ui/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@ui/components/ui/collapsible';
import { NaviMainVo } from '@web/features/layout/model/create-navi-list';

export function NaviOneMenu({ model }: { model: NaviMainVo }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SidebarMenu key={model.key}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton asChild>
              <button className="ui-flex ui-items-center ui-justify-between ui-px-4">
                <model.icon />
                <span className="ui-flex-1">{model.title}</span>
                {isOpen ? (
                  <Minus className="ui-h-4 ui-w-4" />
                ) : (
                  <ChevronsUpDown className="ui-h-4 ui-w-4" />
                )}
              </button>
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            {model.list.map((item) => {
              return (
                <SidebarMenuSub key={item.key}>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={item.href}>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              );
            })}
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}
