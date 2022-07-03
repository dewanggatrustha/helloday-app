import React from "react";
import { Box, Text, Flex, Spacer, Image } from "@chakra-ui/react";

const WeeklyCard = ({ day, date, temp, icon }) => {
  return (
    <Box
      w="100%"
      boxShadow="md"
      pt="3"
      pl="10"
      rounded="15px"
      bg="white"
      align="center"
      h="100px"
    >
      <Flex p="3">
        <Box w="100%" textAlign="left">
          <Text fontWeight="700">{day}</Text>
          <Text color="#979797">{date}</Text>
        </Box>
        <Spacer />
        <Box w="100%" p="2">
          <Text fontSize="2xl" fontWeight="600">
            {temp}°
          </Text>
        </Box>
        <Box w="100%">
          <Image boxSize="50px" tintColor="white" src={icon} />
        </Box>
      </Flex>
    </Box>
  );
};

export default WeeklyCard;
