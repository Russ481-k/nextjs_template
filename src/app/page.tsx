"use client";
import { Metadata } from "next";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <Box bgColor="black" h="500vh" color="white" position="relative">
      <Flex
        position="sticky"
        alignItems="top"
        justifyContent="space-between"
        top="1rem"
        h="0"
        w="100%"
      >
        <IconButton
          position="absolute"
          left="2rem"
          aria-label="Search database"
          variant="bgDarkWhite"
          icon={<HamburgerIcon w="2rem" h="2rem" onClick={onOpen} />}
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              top="1rem"
              right="1rem"
              border="solid 1px lightgray"
            />
            <DrawerBody>
              <Flex>
                <Text>SITE MAP</Text>
                <Box>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex w="100%" justifyContent="center" alignItems="top">
          <Heading>HC</Heading>
        </Flex>
        <Flex position="absolute" right="2rem" alignItems="center">
          <Button variant="bgDarkWhite">Button A</Button>
          <Button variant="bgDarkWhite">Button B</Button>
          <Link href="/dashboard" variant="bgDarkWhite" pl="16px">
            매물 둘러보기
          </Link>
        </Flex>
      </Flex>
      {/*BodySection_1 */}
      <Box>
        {/* <Flex className="bg-video">
          <video className="bg-video__content" muted loop>
            <source src="img/video.mp4" type="video/mp4" />
            <source src="img/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </Flex> */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          h="100vh"
        >
          <Flex
            position="absolute"
            backgroundImage="/image/main_0.jpg"
            backgroundSize="cover"
            opacity=".6"
            w="100%"
            h="100vh"
          />
          <IconButton
            position="absolute"
            left="1rem"
            aria-label="body_section_left_button"
            variant="bgDarkWhite"
            icon={<ChevronLeftIcon w="5rem" h="5rem" />}
          />
          <Box w="100%" ml="15rem" mt="5rem">
            <Heading fontSize="60">SLOGAN A</Heading>
            <Heading fontSize="60">SLOGAN B</Heading>
            <Heading fontSize="60">SLOGAN C</Heading>
            <Text fontSize="20">SLOGAN test SLOGAN test SLOGAN</Text>
          </Box>
          <IconButton
            position="absolute"
            top="90vh"
            left="50%"
            transform="translate(-50%, -50%)"
            aria-label="body_section_right_button"
            variant="bgDarkWhite"
            icon={<ArrowDownIcon w="3rem" h="3rem" />}
          />
          <IconButton
            position="absolute"
            right="1rem"
            aria-label="Search database"
            variant="bgDarkWhite"
            icon={<ChevronRightIcon w="5rem" h="5rem" />}
          />
        </Flex>
        {/*BodySection_2 */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          backgroundImage="/image/main_1.jpg"
          backgroundSize="cover"
          opacity=".6"
          sx={{ _hover: "opacity:.5" }}
          w="100%"
          h="100vh"
        >
          <Box>
            <Text>슬로건A</Text>
            <Text>슬로건B</Text>
          </Box>
          <Button variant="bgDarkWhite">자회사A</Button>
          <Button variant="bgDarkWhite">자회사B</Button>
          <Button variant="bgDarkWhite">자회사C</Button>
          <Button variant="bgDarkWhite">자회사D</Button>
          <Button variant="bgDarkWhite">자회사E</Button>
        </Flex>
        {/*BodySection_3 */}
        <Flex
          alignItems="center"
          justifyContent="space-around"
          w="100%"
          h="100vh"
        >
          <Box>
            <Text>슬로건A</Text>
            <Text>슬로건B</Text>
          </Box>
          <Button variant="bgDarkWhite">통계A</Button>
          <Button variant="bgDarkWhite">통계B</Button>
          <Button variant="bgDarkWhite">통계C</Button>
          <Button variant="bgDarkWhite">통계D</Button>
          <Button variant="bgDarkWhite">통계E</Button>
        </Flex>
        {/*BodySection_4 */}
        <Flex
          alignItems="center"
          justifyContent="space-around"
          w="100%"
          h="100vh"
        >
          <Button variant="bgDarkWhite">페이지A</Button>
          <Button variant="bgDarkWhite">페이지B</Button>
          <Button variant="bgDarkWhite">페이지C</Button>
          <Button variant="bgDarkWhite">페이지D</Button>
          <Button variant="bgDarkWhite">페이지E</Button>
        </Flex>
      </Box>
      {/* FooterSection_1 */}
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-around"
          w="100%"
          h="10rem"
        >
          <Box>
            <Box>회사명</Box>
            <Box>슬로건</Box>
          </Box>
          <Box>
            <Text>안내문_1</Text>
            <Text>안내문_2</Text>
            <Text>copyright</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
