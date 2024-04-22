"use client";
import { Image, Link } from "@chakra-ui/next-js";
import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bg="primary.500">
      <Flex flex={1}></Flex>
      <Flex flex={4} flexDir="column" py={3}>
        <Flex alignItems="center" height="36px">
          <Flex flex={1} justifyContent="left" gap={4}>
            {/* Footer Top left */}
            <Link
              href="/"
              color="secondary.500"
              _hover={{ color: "secondary.400" }}
            >
              개인정보처리방침
            </Link>
            <Link
              href="/"
              color="secondary.500"
              _hover={{ color: "secondary.400" }}
            >
              이용약관
            </Link>
          </Flex>
          <Flex flex={2} justifyContent="center">
            {/* Footer Top center */}
          </Flex>
          <Flex flex={1} justifyContent="right" gap={4}>
            {/* Footer Top right */}
            <Link href="/" color="secondary.500">
              블로그
            </Link>
            <Link href="/" color="secondary.500">
              카카오톡
            </Link>
          </Flex>
        </Flex>
        <Divider />
        <Flex alignItems="center" height="120px">
          <Flex flex={1} height="120px" py={8} gap={2}>
            {/* Footer Top left */}
            <Flex flexDir="column">
              <Text color="white" fontSize="0.9rem" fontWeight={700}>
                대동에는 만복이 있습니다.
              </Text>
              <Text color="white" fontSize="1.3rem" fontWeight={700}>
                만복공인중개사
              </Text>
            </Flex>
          </Flex>
          <Flex flex={3} height="120px">
            {/* Footer Top right */}
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={1}></Flex>
    </Flex>
  );
};

export default Footer;
