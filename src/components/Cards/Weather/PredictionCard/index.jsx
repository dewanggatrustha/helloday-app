import React from "react";
import { Flex, Heading, HStack, VStack, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import WeatherData from "../../../../data/WeatherData";
import ConditionCard from "../ConditionCard";
import WeeklyCard from "../WeeklyCard";
import WeeklyWeatherData from "../../../../data/WeeklyWeatherData";

const PredictionCard = () => {
  return (
    <Flex
      bg="white"
      w="lg"
      h="100%"
      boxShadow="md"
      p="48px"
      rounded="15px"
      flexDirection="column"
    >
      <Heading as="h5" fontSize="xl">
        This Week
      </Heading>
      <VStack align="left">
        <Heading>Today</Heading>
        <Box mt="5" mb="10" p="1">
          <HStack align="left">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {WeatherData.map((weather) => {
                return (
                  <SwiperSlide>
                    <ConditionCard time={weather.time} temp={weather.temp} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </HStack>
          <VStack>
            {WeeklyWeatherData.slice(0, 4).map((weekly) => {
              return (
                <SwiperSlide>
                  <WeeklyCard
                    day={weekly.day}
                    date={weekly.date}
                    temp={weekly.temp}
                    icon={weekly.icon}
                  />
                </SwiperSlide>
              );
            })}
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default PredictionCard;
