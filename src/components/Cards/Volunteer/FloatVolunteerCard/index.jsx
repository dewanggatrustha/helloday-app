import React from "react";
import MiniVolunteerCard from "../MiniVolunteerCard";
import {
  Box,
  useColorModeValue,
  HStack,
  Text,
  Progress,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";

const FloatVolunteerCard = () => {
  return (
    <Box
      bg={useColorModeValue("white", "blue")}
      boxShadow="md"
      p="6"
      rounded="md"
      mb="5"
      w="100%"
      align="left"
    >
      <VStack align="left">
        <Text fontWeight="bold" fontSize="xl">
          Be a Volunteer for the Victims of the Mount Semeru Eruption.
        </Text>
        <Text fontWeight="medium" fontSize="md">
          East Java, Indonesia
        </Text>
        <Progress colorScheme="green" size="sm" value={55.5} />
        <Text fontSize="md">320 peoples has joined</Text>
        <HStack>
          <Button w="30%" colorScheme="yellow" variant="outline">
            Share
          </Button>
          <Button w="70%" colorScheme="yellow" color="white">
            Join Now
          </Button>
        </HStack>
        <Divider orientation="horizontal" />
        <MiniVolunteerCard />
      </VStack>
    </Box>
  );
};

export default FloatVolunteerCard;
