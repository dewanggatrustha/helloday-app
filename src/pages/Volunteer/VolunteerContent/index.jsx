import React from "react";
import FloatVolunteerCard from "../../../components/Cards/FloatVolunteerCard";
import {
  Box,
  Heading,
  Divider,
  Stack,
  VStack,
  useColorModeValue,
  Image,
  HStack,
  Text,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import volunteerData from "../../../data/VolunteerData";

const VolunteerContent = () => {
  return (
    <>
      <Box
        m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
        bg={useColorModeValue("white", "blue")}
      >
        <Stack direction="row" h="30px">
          <Divider
            orientation="vertical"
            borderWidth="4px"
            rounded="full"
            borderColor="primary.500"
          />
          <VStack align="left">
            <Heading as="h4" size="xl">
              Volunteer
            </Heading>
          </VStack>
        </Stack>

        <Stack direction={["column", "row"]} spacing="24px" mt="10">
          <Box w="65%" h="40px">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Image
                src="https://asarhumanity.or.id/wp-content/uploads/2021/12/distribusi-kurma-asar-humanity-untuk-pengungsi-semeru.png"
                alt="articleimg"
                borderRadius="10"
              />
              <VStack align="left">
                <Heading as="h6" size="md" mb="5">
                  Information
                </Heading>
                <Text>
                  Asar Humanity yang berkolaborasi dengan mitra Sebar Berkah,
                  telah mendistribusikan kurma sebanyak 8 dus untuk para
                  pengungsi semeru pada Minggu (12/12). Dengan tajuk program
                  “Bantuan Kemanusiaan Erupsi Gunung Semeru”. Hal tersebut pun
                  direspon baik oleh masyarakat terdampak erupsi. Erupsi gunung
                  Semeru yang terjadi beberapa waktu lalu berdampak hebat pada
                  kehidupan masyarakat di sana. Banyak penduduk harus meregang
                  nyawa karena tak sempat menyelamatkan diri, banyak pula dari
                  para pengungsi yang kehilangan harta bendanya. Sebagian lagi
                  berbondong-bondong menunju tempat yang lebih aman.
                </Text>
              </VStack>
              <VStack align="left">
                <Heading as="h6" size="md" mb="5">
                  Organizer
                </Heading>
                <HStack>
                  <Image
                    src="https://donasi.asarhumanity.or.id/wp-content/uploads/2021/07/LOGO-ASAR-NEW-1-1-1-1-1024x1024.png"
                    alt="companylogo"
                    borderRadius="full"
                    boxSize="100px"
                    mr="5"
                  ></Image>
                  <VStack align="left">
                    <Text fontWeight="bold">ASAR HUMANITY</Text>
                    <Text>Jakarta, Indonesia</Text>
                  </VStack>
                </HStack>
              </VStack>
              <HStack mb="10" mt="5">
                <Button w="30%" colorScheme="yellow" variant="outline">
                  Share
                </Button>
                <Button w="70%" colorScheme="yellow" color="white">
                  Join Now
                </Button>
              </HStack>
            </VStack>
          </Box>
          <Box w="35%" h="40px">
            <FloatVolunteerCard />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VolunteerContent;
