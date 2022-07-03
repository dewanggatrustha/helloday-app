import React from "react";
import {
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  Box,
  useColorModeValue,
  HStack,
  Text,
  ButtonGroup,
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
        <Text fontWeight="bold" fontSize="xl" mb="5">
          Be a Volunteer for the Victims of the Mount Semeru Eruption
        </Text>
        <Box pb="5">
          <HStack>
            <FaMapMarkerAlt />
            <Text fontWeight="medium" fontSize="md">
              Location
            </Text>
          </HStack>
          <Text>East Java, Indonesia</Text>
        </Box>

        <Box pb="5">
          <HStack>
            <FaRegCalendarAlt />
            <Text fontWeight="medium" fontSize="md">
              Project Timeline
            </Text>
          </HStack>
          <Text>Start: September 2022</Text>
          <Text>Ends: December 2022</Text>
        </Box>

        <Box pb="5">
          <HStack>
            <FaExclamationTriangle />
            <Text fontWeight="medium" fontSize="md">
              Registration Deadline
            </Text>
          </HStack>
          <Text>July 31st, 2022</Text>
        </Box>

        <Box pb="5">
          <Button
            w="100%"
            mb="2"
            h="40px"
            colorScheme="yellow"
            variant="outline"
          >
            Share
          </Button>
          <Button w="100%" h="42px" colorScheme="yellow" color="white">
            Join Now
          </Button>
        </Box>

        <Divider orientation="horizontal" />

        <Box pt="5">
          <Text fontWeight="medium" fontSize="md">
            AREA OF ISSUE
          </Text>
          <ButtonGroup spacing="3" mt="2">
            <Button>Disaster Response & Recovery</Button>
            <Button>Eruption</Button>
          </ButtonGroup>
        </Box>

        <Box pb="5" pt="5">
          <Text fontWeight="medium" fontSize="md">
            TAGS
          </Text>
          <ButtonGroup spacing="3" mt="2">
            <Button>Disaster</Button>
            <Button>Eruption</Button>
            <Button>Volcano</Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default FloatVolunteerCard;
