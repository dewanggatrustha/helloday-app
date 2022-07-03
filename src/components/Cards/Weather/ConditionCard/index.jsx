import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { WiSolarEclipse } from "react-icons/wi";

const ConditionCard = ({ time, temp }) => {
  return (
    <Box
      boxShadow="md"
      p="12px"
      mb="10"
      w="80px"
      rounded="15px"
      bg="white"
      align="center"
    >
      <Text>{time} </Text>
      <WiSolarEclipse size="50px" color="#F4CC3E" />
      <Text fontWeight="700">{temp}°C</Text>
    </Box>
  );
};

export default ConditionCard;
