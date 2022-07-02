import React from "react";
import {
  Box,
  Image,
  HStack,
  Text,
  VStack,
  Progress,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

const SquareContentCard = ({
  imageAlt,
  imageUrl,
  title,
  desc,
  target,
  progress,
  achieved,
  link,
}) => {
  return (
    <LinkBox
      boxSize="440px"
      overflow="hidden"
      align="left"
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
            h="240px"
            src={imageUrl}
            alt={imageAlt}
            borderRadius="base"
          />
        </VStack>
        <HStack spacing="24px" mt="5">
          <VStack spacing="5px">
            <Box w="100%">
              <LinkOverlay href={link} fontWeight="bold" fontSize={18} mb="3">
                {title}
              </LinkOverlay>
              <Text align="left" fontSize={13} mb="2">
                {desc}
              </Text>
            </Box>
            <Box w="100%">
              <Progress colorScheme="green" size="sm" value={progress} />
              <HStack mt="2" fontSize={13}>
                <Text>{achieved}</Text>
                <Text>raised from</Text>
                <Text>{target}</Text>
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </LinkBox>
  );
};

export default SquareContentCard;
