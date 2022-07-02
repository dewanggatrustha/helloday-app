import React from "react";
import FloatVolunteerCard from "../../../components/Cards/Volunteer/FloatVolunteerCard";
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
  ButtonGroup,
} from "@chakra-ui/react";

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
              Be a Volunteer for the Victims of the Mount Semeru Eruption
            </Heading>
          </VStack>
        </Stack>

        <Stack direction={["column", "row"]} spacing="24px" mt="10">
          <Box w="70%" h="40px">
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
              <VStack align="left" spacing="5">
                <Heading as="h6" size="md">
                  Information
                </Heading>
                <Text>
                  Korban erupsi gunung Semeru saat ini masih begitu berduka.
                  Masih membutuhkan kepedulian dari seluruh lapisan masyarakat
                  dengan kesulitan yang dialami. Semua pihak pun bahu membahu
                  membantu para korban erupsi Semeru, termasuk Asar Humanity.
                  Asar Humanity yang berkolaborasi dengan mitra Sebar Berkah,
                  telah mendistribusikan kurma sebanyak 8 dus untuk para
                  pengungsi semeru pada Minggu (12/12).
                </Text>
                <Text>
                  Dengan tajuk program “Bantuan Kemanusiaan Erupsi Gunung
                  Semeru”. Hal tersebut pun direspon baik oleh masyarakat
                  terdampak erupsi. Erupsi gunung Semeru yang terjadi beberapa
                  waktu lalu berdampak hebat pada kehidupan masyarakat di sana.
                  Banyak penduduk harus meregang nyawa karena tak sempat
                  menyelamatkan diri, banyak pula dari para pengungsi yang
                  kehilangan harta bendanya. Sebagian lagi berbondong-bondong
                  menunju tempat yang lebih aman. Bantuan masih terus diberikan
                  oleh seluruh lapisan masyarakat Indonesia kepada para
                  pengungsi yang sedang tak berdaya. Mulai dari bantuan dana,
                  pangan, pakaian hingga berbagai bentuk bantuan lainnya.
                </Text>
                <Text>
                  Turut berduka atas kejadian erupsi Gunung Semeru yang memakan
                  banyak korban jiwa, tiada henti-hentinya kami mengajak Sahabat
                  ASAR dimanapun anda berada, untuk terus mendoakan para
                  pengungsi, dan berbagai pihak yang terlibat dalam kebencanaan
                  semeru. Yuk bersama-sama meringankan beban para pengungsi
                  semeru dengan memberikan bantuan terbaikmu melalui ASAR
                  Humanity dengan menjadi relawan.
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

              <Box pt="5" mb="10">
                <Text fontWeight="medium" fontSize="md">
                  AREA OF ISSUE
                </Text>
                <ButtonGroup spacing="3" mt="2">
                  <Button>Disaster Response & Recovery</Button>
                  <Button>Eruption</Button>
                </ButtonGroup>
                <Text fontWeight="medium" fontSize="md" mt="5">
                  TAGS
                </Text>
                <ButtonGroup spacing="3" mt="2">
                  <Button>Disaster</Button>
                  <Button>Eruption</Button>
                  <Button>Volcano</Button>
                </ButtonGroup>
              </Box>

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
          <Box w="30%" h="40px">
            <FloatVolunteerCard />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VolunteerContent;
