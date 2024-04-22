"use client";
import { Flex, Text } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import { Image } from "@chakra-ui/next-js";
import UserAvatar from "./UserAvatar";
import { useEffect, useState } from "react";

const TopBar = ({ topBarHeight, welcomeImgHeight }: { topBarHeight: string, welcomeImgHeight: string }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const welcomeImgHeightToNumberConverter = welcomeImgHeight?Number(welcomeImgHeight?.slice(0,-2)):0;
  const topBarHeightToNumberConverter = topBarHeight?Number(topBarHeight?.slice(0,-2)):0;
  const topBarEffectHeight = welcomeImgHeightToNumberConverter - topBarHeightToNumberConverter;
  const effectSign = scrollPosition < topBarEffectHeight

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };  
  
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll); //unmount시 해제되도록
    };
  }, []);

  return (
    <Flex
      backdropFilter={effectSign ? "blur(7px)" : "blur(0px)"}
      backgroundColor={effectSign ?"rgba(255, 255, 255, 0.2)" : "secondary.500"}
      boxSizing="border-box"
      height={topBarHeight}
      pr="17px"
      position="fixed"
      transition="all 0.5s ease-in"
      width="100vw"
      zIndex={3}
    >
      <Flex alignItems="center" flex={1} justifyContent="left" px={4}>
        {/* Header left */}
        <SideDrawer topBarHeight={topBarHeight} effectSign={effectSign} />
      </Flex>
      <Flex
        alignItems="center"
        flex={2}
        flexDir="column"
        justifyContent="center"
      >
        {/* Header center */}
        <Flex justifyContent="center" alignItems="end">
          <Text color={effectSign?"secondary.500":"white"} fontSize="2rem" fontWeight={700} transition="all 0.5s ease-in">
            만복공인중개사
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" flex={1} justifyContent="right" px={4}>
        {/* Header right */}
        <UserAvatar />
      </Flex>
    </Flex>
  );
};

export default TopBar;
