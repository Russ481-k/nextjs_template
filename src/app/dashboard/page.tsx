"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Select,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
} from "@chakra-ui/react";
import { Footer, Recommendations, TopBar } from "../components";
import { Parallax, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';

import Properties from "./Properties";


export default function Page() {
  const topBarHeight = "62px";
  const welcomeImgHeight = "420px";

  return (
    <Flex backgroundColor="gray.200" flexDir="column" width="100%">
      <Flex flex={1} flexDir="column" >
        <Swiper
          modules={[Parallax, Navigation, Autoplay]}
          loop={true}
          style={{
            height: welcomeImgHeight
          }}
          speed={600}
          parallax={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <Box
            slot="container-start"
            className="parallax-bg"
            backgroundImage="/image/welcomeImg.avif"
            data-swiper-parallax="-23%"
          ></Box>
          <SwiperSlide>
            <Flex justifyContent="center" alignItems="end" height="40%"></Flex>
            <Flex flexDir="column" height="60%" bgColor="rgba(0,0,0,0.5)" p={8}>
              <Flex justifyContent="center" alignItems="end">
                <Text color="white" fontSize="1rem" fontWeight={600} data-swiper-parallax="-600">
                  믿음 신뢰 만족
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="end">
                <Text color="white" fontSize="4rem" fontWeight={600} data-swiper-parallax="-100">
                  만복공인중개사
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="end" width="100%" data-swiper-parallax="-1000">
                <Flex justifyContent="center" alignItems="end" width="50%">
                  <Flex flexDir="column" width="50%">
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      대동지사
                    </Text>
                    <Text color="white" fontSize="1rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      소장 김미경 ( 010-4388-1700 )
                    </Text>
                  </Flex>
                  <Flex flexDir="column" width="50%">
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      명지지사
                    </Text>
                    <Text color="white" fontSize="1rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      소장 화성준 ( 010-2586-0617 )
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent="center" alignItems="end" height="40%"></Flex>
            <Flex flexDir="column" height="60%" bgColor="rgba(0,0,0,0.5)" p={8}>
              <Flex justifyContent="center" alignItems="end">
                <Text color="white" fontSize="1rem" fontWeight={600} data-swiper-parallax="-600">
                  대동에는 만복이 있습니다.
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="end">
                <Text color="white" fontSize="4rem" fontWeight={600} data-swiper-parallax="-100">
                  만복공인중개사
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="end" width="100%" data-swiper-parallax="-1000">
                <Flex justifyContent="center" alignItems="end" width="50%">
                  <Flex flexDir="column" width="50%">
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      대동지사
                    </Text>
                    <Text color="white" fontSize="1rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      소장 김미경 ( 010-4388-1700 )
                    </Text>
                  </Flex>
                  <Flex flexDir="column" width="50%">
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      지사 소개
                    </Text>
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      대동, 상동에 위치한 토지, 상가, 주택, 공장 등 다양한 매물을 보유하고 있습니다.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justifyContent="center" alignItems="end" height="40%"></Flex>
              <Flex flexDir="column" height="60%" bgColor="rgba(0,0,0,0.5)" p={8}>
                <Flex justifyContent="center" alignItems="end">
                  <Text color="white" fontSize="1rem" fontWeight={600} data-swiper-parallax="-600">
                    명지에는 만복이 있습니다.
                  </Text>
                </Flex>
                <Flex justifyContent="center" alignItems="end">
                  <Text color="white" fontSize="4rem" fontWeight={600} data-swiper-parallax="-100">
                    만복공인중개사
                  </Text>
                </Flex>
                <Flex justifyContent="center" alignItems="end" width="100%" data-swiper-parallax="-1000">
                <Flex justifyContent="center" alignItems="end" width="50%">
                  <Flex flexDir="column" width="50%">
                  <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      명지지사
                    </Text>
                    <Text color="white" fontSize="1rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      소장 화성준 ( 010-2586-0617 )
                    </Text>
                  </Flex>
                  <Flex flexDir="column" width="50%">
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      지사 소개
                    </Text>
                    <Text color="white" fontSize="0.8rem" fontWeight={400} textAlign="left" data-swiper-parallax="-100">
                      명지에 위치한 상가, 주택, 공장 등 다양한 매물을 보유하고 있습니다.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              </Flex>
          </SwiperSlide>
        </Swiper>
        <Flex alignItems="end" justifyContent="center" my={4} mt="-56px" zIndex={1}>
          <Flex flex={1}></Flex>
          <Flex flex={2}>
            <InputGroup>
              <InputLeftAddon p={0}>
                <Select
                  backgroundImage="none"
                  backgroundColor="white"
                  width="100%"
                >
                  <option value="option1">전체</option>
                  <option value="option3">입지분석</option>
                  <option value="option2">토지</option>
                  <option value="option3">공장</option>
                  <option value="option3">주택</option>
                  <option value="option3">상가</option>
                </Select>
              </InputLeftAddon>
              <Input
                backgroundImage="none"
                backgroundColor="white"
                placeholder="매물을 검색하세요."
              />
              <InputRightAddon p={0}>
                <Button width="100%">
                  <SearchIcon/>                    
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Flex>
          <Flex flex={1}></Flex>
        </Flex>
        <Tabs position='relative' variant='unstyled'>
          <TabList
            alignItems="center"
            bgColor="secondary.500"
            color="white"
            height="36px"
            justifyContent="center"
          >
            <Tab>매물</Tab>
            <Tab>입지분석</Tab>
            <Tab>부동산소개</Tab>
            <Tab>고객센터</Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='primary.500' borderRadius='1px' />
          <TabPanels>
            <TabPanel p={0}>
              <Properties />
            </TabPanel>
            <TabPanel p={0}>
              <Flex bg="white" justifyContent="center">
                <Flex flexDir="column" p={8} width="1280px" gap={4}>
                  <Heading fontSize="1.2rem" fontWeight={600}>
                    입지분석
                  </Heading>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel p={0}>
              <Flex bg="white" justifyContent="center">
                <Flex flexDir="column" p={8} width="1280px" gap={4}>
                  <Heading fontSize="1.2rem" fontWeight={600}>
                    부동산소개
                  </Heading>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel p={0}>
              <Flex bg="white" justifyContent="center">
                <Flex flexDir="column" p={8} width="1280px" gap={4}>
                  <Heading fontSize="1.2rem" fontWeight={600}>
                    고객센터  
                  </Heading>
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
