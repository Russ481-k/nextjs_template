"use client";

import { Image } from "@chakra-ui/next-js";
import { Badge, Card, CardBody, CardFooter, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay, Keyboard, FreeMode, EffectCoverflow  } from "swiper/modules";
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../swiper.css';

import { recommendationsPropertyArray } from "../../../../recommendationsPropertyArray";

function Recommendations(){

    SwiperCore.use([Navigation, Autoplay, Keyboard, FreeMode, A11y, EffectCoverflow]);

    return (
        <Flex bg="white">
          <Flex flexDir="column" gap={4} p={8} width="100%">
            <Heading fontSize="1.2rem" fontWeight={600}>
              추천매물
            </Heading>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                loop={true} // 슬라이드 루프
                spaceBetween={30} // 슬라이스 사이 간격
                freeMode={true}
                keyboard={true}
                modules={[ Keyboard, Autoplay, FreeMode, EffectCoverflow]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
                }}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
            >
              {recommendationsPropertyArray.map((recommendation, index) => (
                  <SwiperSlide key={index} >
                    <Card shadow="lg"maxW="sm" mb={6}>
                    <CardBody>
                      <Image
                        src={recommendation.imageUrl}
                        alt={recommendation.title}
                        borderRadius="lg"
                        width={400}
                        height={240}
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">
                          {recommendation.title}
                        </Heading>
                        <Text>
                          {recommendation.description}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter alignItems="center" justifyContent="space-between">
                      <Badge
                        fontSize="1.0rem"
                        variant="solid"
                        colorScheme="facebook"
                      >
                        {recommendation.salesType}
                      </Badge>
                      <Text color="primary.600" fontSize="xl">
                        {recommendation.price}
                      </Text>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
                )
              )}
            </Swiper>
          </Flex>
        </Flex>
    )
}

export default Recommendations;