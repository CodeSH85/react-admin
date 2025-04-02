import { useState } from 'react';
import { Menu as HMenu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MenuPropType } from "./type"

const Menu = (props: MenuPropType) => {
  const {
    title,
    items=[]
  } = props;

  return (
    <HMenu>
      <MenuButton>{ title }</MenuButton>
      <MenuItems anchor="bottom">
        {
          items?.map((item) => (
            <MenuItem key={item.key}>
              <a 
                className="block data-[focus]:bg-blue-100" 
                href={item.key}
              >
                {item.title}
              </a>
            </MenuItem>
          ))
        }
      </MenuItems>
    </HMenu>
  )
}

export { Menu }
