import React from "react";
import {
  Box,
  Text,
  Heading,
  Divider,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SquareVolunteerCard from "../../components/Cards/Volunteer/SquareVolunteerCard";
import VolunteerContentData from "../../data/VolunteerContentData";
import SquareNewsCard from "../../components/Cards/Volunteer/SquareNewsCard";
import VolunteerNewsData from "../../data/VolunteerNewsData";
import Carousel from "../../components/Cards/Volunteer/Carousel";
import TestimonialsCard from "../../components/Cards/Volunteer/TestimonialsCard";
import TestimonialsData from "../../data/TestimonialsData";

const Volunteer = () => {
  return (
    <>
      <Box
        m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
        bg={useColorModeValue("white", "blue")}
      >
        <Stack direction="row" h="30px" mb="14px">
          <Divider
            orientation="vertical"
            borderWidth="4px"
            rounded="full"
            borderColor="primary.500"
          />
          <VStack align="left">
            <Heading as="h4" size="xl">
              Volunteers
            </Heading>
          </VStack>
        </Stack>
        <Heading as="h3" size="md" fontWeight="500">
          Use your spare time by helping people on the go
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" mt="24px">
          <GridItem colStart={1} colEnd={3} h="30px" w="90%" mr={5}>
            <Carousel />
          </GridItem>
          <GridItem w="100%" h="10">
            <Box
              as="button"
              borderRadius="md"
              bg="#F4CC3E"
              color="white"
              w="100%"
              px={4}
              h={107}
            >
              <Grid templateColumns="repeat(3,1fr)" h="100%">
                <GridItem h="100%">
                  <InfoIcon w={50} h="100%" />
                </GridItem>
                <GridItem mt={2} colStart={2} colEnd={4}>
                  <Text fontSize="3xl">Volunteer</Text>
                  <Text fontSize="4xl" fontWeight="700">
                    123,567
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            <Box
              mt={5}
              as="button"
              borderRadius="md"
              bg="#F4CC3E"
              color="white"
              w="100%"
              px={4}
              h={107}
            >
              <Grid templateColumns="repeat(3,1fr)" h="100%">
                <GridItem h="100%">
                  <InfoIcon w={50} h="100%" />
                </GridItem>
                <GridItem mt={2} colStart={2} colEnd={4}>
                  <Text fontSize="3xl">Community</Text>
                  <Text fontSize="4xl" fontWeight="700">
                    1,789
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            <Box
              mt={5}
              as="button"
              borderRadius="md"
              bg="#F4CC3E"
              color="white"
              w="100%"
              px={4}
              h={107}
            >
              <Grid templateColumns="repeat(3,1fr)" h="100%">
                <GridItem h="100%">
                  <InfoIcon w={50} h="100%" />
                </GridItem>
                <GridItem mt={2} colStart={2} colEnd={4}>
                  <Text fontSize="3xl">Activity</Text>
                  <Text fontSize="4xl" fontWeight="700">
                    4,321
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
        <Stack mt={300} direction="row" h="30px">
          <VStack align="left"></VStack>
        </Stack>
        <Box overflowY="auto" width="100%" mt="10">
          <Heading as="h5" size="lg" fontWeight="600">
            Urgent Volunteer
          </Heading>
          <Text mt="2">
            Helping Today, Helping Tomorrow, Let’s join to be Volunteer!
          </Text>
          <HStack align="left" mt="5">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {VolunteerContentData.map((funddata) => {
                return (
                  <SwiperSlide>
                    <SquareVolunteerCard
                      imageUrl={funddata.imageUrl}
                      imageAlt={funddata.imageAlt}
                      title={funddata.title}
                      desc={funddata.desc}
                      link={funddata.link}
                      organizer={funddata.organizer}
                      imgOrg={funddata.imgOrg}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </HStack>
        </Box>
        <Stack direction="row" h="30px">
          <VStack align="left"></VStack>
        </Stack>
        <Box overflowY="auto" width="100%" mt="10">
          <Heading as="h5" size="lg" fontWeight="600">
            Latest News
          </Heading>
          <HStack align="left" mt="5">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {VolunteerNewsData.map((funddata) => {
                return (
                  <SwiperSlide>
                    <SquareNewsCard
                      imageUrl={funddata.imageUrl}
                      imageAlt={funddata.imageAlt}
                      title={funddata.title}
                      desc={funddata.desc}
                      editor={funddata.editor}
                      link={funddata.link}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </HStack>
          <Box overflowY="auto" width="100%" mt="10" mb="10">
            <Box m="5">
              <Heading as="h5" size="lg" fontWeight="600" textAlign="center">
                Testimonials
              </Heading>
              <Text mt="2" fontSize="md" textAlign="center">
                Those who have followed Volunteers on HelloDay
              </Text>
              <HStack align="center" mt="5" pr="200" pl="200">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {TestimonialsData.map((testidata) => {
                    return (
                      <SwiperSlide>
                        <TestimonialsCard
                          imgProfile={testidata.imgProfile}
                          imageAlt={testidata.imageAlt}
                          name={testidata.name}
                          testi={testidata.testi}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Volunteer;
