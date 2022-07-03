import React from "react";
import {
  Box,
  Image,
  HStack,
  Text,
  VStack,
  LinkBox,
  LinkOverlay,
  Divider,
} from "@chakra-ui/react";

interface SquareVolunteerCardProps {
  imageAlt: string;
  imageUrl: string;
  title: string;
  desc: string;
  link: string;
  imgOrg: string;
  organizer: string;
}
const SquareVolunteerCard = ({
  imageAlt,
  imageUrl,
  title,
  desc,
  link,
  imgOrg,
  organizer,
}: SquareVolunteerCardProps) => {
  return (
    <LinkBox
      border="1px"
      borderColor="gray.100"
      borderRadius="10px"
      boxSize="440px"
      overflow="hidden"
      boxShadow="md"
      ml="2"
      mr="5"
      p="5"
      mb="2"
    >
      <Box>
        <VStack>
          <Image
            w="400px"
            h="200px"
            objectFit="cover"
            src={imageUrl}
            alt={imageAlt}
            borderRadius="base"
            mb="2"
          />
        </VStack>
        <HStack spacing="24px" mt="2">
          <VStack spacing="5px">
            <Box w="100%">
              <LinkOverlay href={link} fontWeight="bold" fontSize={18} mb="5">
                {title}
              </LinkOverlay>
              <Text align="left" fontSize={13} mb="2" mt="3">
                {desc}
              </Text>
            </Box>
            <Divider />
            <Box w="100%">
              <Text fontWeight="600">Created by</Text>
              <HStack mt="2" mb="2" fontSize={13}>
                <Image src={imgOrg} boxSize="30px" borderRadius="full" />
                <Text>{organizer}</Text>
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </LinkBox>
  );
};

export default SquareVolunteerCard;
