"use client";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";

const UserAvatar = () => {
  return (
    <Menu >
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<Avatar size="sm"/>}
        variant='none'
      />
      <Portal>
        <MenuList transform="translate(10px, -4px) !important" zIndex={3}>
          <MenuGroup title="User Name">
          <MenuDivider />
          <MenuItem icon={<EditIcon />} >
            개인정보 수정
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} >
            로그아웃
          </MenuItem>
          </MenuGroup>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default UserAvatar;
