import React from "react";
import volunteerData from "../../../data/VolunteerData";
import { Box, HStack, Text, Image, VStack } from "@chakra-ui/react";

const MiniVolunteerCard = () => {
  return (
    <>
      {volunteerData.map((volunteer) => {
        return (
          <Box rounded="md" mb="5">
            <VStack align="left">
              <HStack>
                <Image
                  src={volunteer.imgsrc}
                  alt={volunteer.alt}
                  boxSize="50px"
                  borderRadius="full"
                  mr="5"
                  mb="5"
                />
                <Text fontWeight="bold" fontSize="sm">
                  {volunteer.name}
                </Text>
                <Text fontSize="sm">has joined</Text>
              </HStack>
            </VStack>
          </Box>
        );
      })}
    </>
  );
};

export default MiniVolunteerCard;
