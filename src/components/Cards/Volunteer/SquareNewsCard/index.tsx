import React from "react";
import {
  Box,
  Image,
  HStack,
  Text,
  VStack,
  LinkBox,
  LinkOverlay,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
interface SquareNewsCardProps {
  imageAlt: string;
  imageUrl: string;
  title: string;
  desc: string;
  editor: string;
  link: string;
}
const SquareNewsCard = ({
  imageAlt,
  imageUrl,
  title,
  desc,
  editor,
  link,
}: SquareNewsCardProps) => {
  return (
    <LinkBox
      border="1px"
      borderColor="gray.100"
      borderRadius="10px"
      boxSize="440"
      overflow="hidden"
      // align="left"
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
            h="200"
            objectFit="cover"
            src={imageUrl}
            alt={imageAlt}
            borderRadius="base"
          />
        </VStack>
        <HStack spacing="24px" mt="2">
          <VStack spacing="5px">
            <Box w="100%">
              <Box h="50px">
                <LinkOverlay href={link} fontWeight="bold" fontSize={14} mb="3">
                  {title}
                </LinkOverlay>
              </Box>
              <Text align="left" fontSize={12} mb="2" h="80px">
                {desc}
              </Text>
            </Box>
            <Divider />
            <Box w="100%">
              <Grid templateColumns="repeat(6, 1fr)" mt="2">
                <GridItem colEnd={2}>
                  <Image
                    w={7}
                    h={7}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logo_Kompasdotcom.png/600px-Logo_Kompasdotcom.png"
                  />
                </GridItem>
                <GridItem colStart={2} colEnd={6}>
                  <Text>{editor}</Text>
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </LinkBox>
  );
};

export default SquareNewsCard;
