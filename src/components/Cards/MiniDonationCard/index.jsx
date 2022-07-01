import React from "react";
import donationData from "../../../data/DonationData";
import { Box, HStack, Text, Image, VStack } from "@chakra-ui/react";

const MiniDonationCard = () => {
  return (
    <>
      {donationData.map((donation) => {
        return (
          <Box rounded="md" bg="white" mb="5">
            <VStack align="left">
              <HStack>
                <Image
                  src={donation.imgsrc}
                  alt={donation.alt}
                  boxSize="50px"
                  borderRadius="full"
                  mr="5"
                  mb="5"
                />
                <Text fontWeight="bold" fontSize="sm">
                  {donation.name}
                </Text>
                <Text fontSize="sm">just donated</Text>
                <Text fontSize="sm" fontWeight="bold">
                  {donation.nominal}
                </Text>
              </HStack>
            </VStack>
          </Box>
        );
      })}
    </>
  );
};

export default MiniDonationCard;
