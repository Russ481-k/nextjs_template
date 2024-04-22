"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const SideDrawer = ({ topBarHeight, effectSign }: { topBarHeight: string, effectSign:boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Done"
        backgroundColor="transparent"
        icon={<HamburgerIcon boxSize={6} color={effectSign ? "primary.500" : "white"} fontSize="20px" _hover={{ color: "gray.500" }} onClick={onOpen} />}
        isRound={true}
        variant="none"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay mr={isOpen?"17px":"0px"}/>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader height={topBarHeight} alignItems="center">
            관리자 메뉴
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir={"column"} gap={4}>
              <Button w="100%" justifyContent="left" variant='link'>입지 분석 등록</Button>
              <Button w="100%" justifyContent="left" variant='link'>매물 등록</Button>
              <Button w="100%" justifyContent="left" variant='link'>매물 관리</Button>
              <Button w="100%" justifyContent="left" variant='link'>고객 관리</Button>
              <Button w="100%" justifyContent="left" variant='link'>고객센터 관리</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
