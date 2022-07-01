import React from "react";
import MiniDonationCard from "../MiniDonationCard";
import {
  Box,
  HStack,
  Text,
  Progress,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";

const FloatingCard = () => {
  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white" mb="5" w="100%">
      <VStack align="left">
        <HStack>
          <Text color="green" fontWeight="medium">
            Rp 10.800.000
          </Text>
          <Text>raised from</Text>
          <Text>Rp 18.000.000</Text>
        </HStack>
        <Progress colorScheme="green" size="sm" value={55.5} />
        <Text fontSize="xs">10.9K donations</Text>
        <HStack>
          <Button w="30%" colorScheme="yellow" variant="outline">
            Share
          </Button>
          <Button w="70%" colorScheme="yellow" color="white">
            Donate Now
          </Button>
        </HStack>
        <Divider orientation="horizontal" />
        <MiniDonationCard />
      </VStack>
    </Box>
  );
};

export default FloatingCard;
