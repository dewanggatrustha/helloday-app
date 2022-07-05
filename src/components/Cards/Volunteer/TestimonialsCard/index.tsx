import React from "react";
import { Box, Image, HStack, Text, VStack, LinkBox } from "@chakra-ui/react";
interface TestimonialsCardProps {
  imgProfile: string;
  imageAlt: string;
  name: string;
  testi: string;
}
const TestimonialsCard = ({
  imgProfile,
  imageAlt,
  name,
  testi,
}: TestimonialsCardProps) => {
  return (
    <LinkBox
      border="1px"
      borderColor="gray.100"
      borderRadius="10px"
      boxSize="540"
      overflow="hidden"
      // align="left"
      boxShadow="md"
      pt="5"
      mb="2"
      h="200"
    >
      <Box>
        <HStack spacing="24px">
          <VStack spacing="5px">
            <Box w="100%" p="5">
              <HStack mb="2">
                <Image
                  src={imgProfile}
                  alt={imageAlt}
                  boxSize="50px"
                  borderRadius="full"
                />
                <Box h="50px">
                  <Text fontWeight="bold" fontSize={18} mb="3" p="3">
                    {name}
                  </Text>
                </Box>
              </HStack>
              <Text align="left" fontSize={15} mb="2" h="80px">
                {testi}
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </LinkBox>
  );
};

export default TestimonialsCard;
