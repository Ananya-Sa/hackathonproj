"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenubarDemo() {
  return (
    <Menubar className="bg-slate-100">
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="">My profile</MenubarRadioItem>
            <MenubarRadioItem value="">Settings</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarRadioItem value="">Help</MenubarRadioItem>
            <MenubarRadioItem value="">Signout</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
