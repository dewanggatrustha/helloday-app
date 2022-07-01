import React from "react";
import donationData from "../../../data/DonationData";
import { Box, HStack, Text, Image, VStack, Button } from "@chakra-ui/react";

const DonationCard = () => {
  return (
    <>
      {donationData.map((donation) => {
        return (
          <Box boxShadow="md" p="6" rounded="md" bg="white" mb="5">
            <VStack align="left">
              <HStack>
                <Image
                  src={donation.imgsrc}
                  alt={donation.alt}
                  boxSize="80px"
                  borderRadius="full"
                  mr="5"
                  mb="5"
                />
                <VStack align="left" spacing="5px">
                  <Text fontWeight="bold" color="#FFA800">
                    {donation.name}
                  </Text>
                  <HStack>
                    <Text>Donated Rp</Text>
                    <Text fontWeight="bold">{donation.nominal}</Text>
                  </HStack>
                  <Text fontSize="sm">{donation.time} days ago</Text>
                </VStack>
              </HStack>
              <Text>{donation.message}</Text>
            </VStack>
          </Box>
        );
      })}
      <Box align="center">
        <Button colorScheme="yellow" variant="outline" w="200px" mt="5">
          See More
        </Button>
      </Box>
    </>
  );
};

export default DonationCard;
