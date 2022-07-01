import React from "react";
import FloatingCard from "../../../components/Cards/FloatingCard";
import DonationCard from "../../../components/Cards/DonationCard";
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

const FundraisingContent = () => {
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
              Content Title
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
                src="https://www.pertamina.com/Media/Image/post/IMG-20200116-WA0005.jpg"
                alt="articleimg"
                borderRadius="10"
              />
              <VStack align="left">
                <Heading as="h6" size="md" mb="5">
                  Information
                </Heading>
                <Text>
                  Hujan deras yang mengguyur wilayah Jakarta dan sekitarnya pada
                  Selasa (25/2/2020) dini hari hingga pagi menyebabkan banjir di
                  sejumlah ruas jalan. Ratusan titik banjir dilaporkan warga
                  lewat situs petabencana.id pada Selasa (25/2/2020) pagi ini.
                  Banjir terjadi merata di seluruh wilayah Jakarta. Kondisi
                  terparah dilaporkan warga berada di kawasan Jakarta Timur yang
                  mencapai 3 meter, tepatnya di Cawang, Jakarta Timur. Hujan
                  yang mengguyur wilayah Jakarta mengakibatkan ketinggian air
                  Kali Ciliwung, Sunter dan Mati meluap. Akibatnya, beberapa
                  wilayah di Ibu Kota hingga hari ini masih terendam banjir.
                </Text>
              </VStack>
              <VStack align="left">
                <Heading as="h6" size="md" mb="5">
                  Organizer
                </Heading>
                <HStack>
                  <Image
                    src="https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-building-icon-isolated-on-abstract-background-png-image_1763153.jpg"
                    alt="companylogo"
                    borderRadius="full"
                    boxSize="100px"
                    mr="5"
                  ></Image>
                  <VStack align="left">
                    <Text fontWeight="bold">PT PERUSAHAAN</Text>
                    <Text>Jakarta, Indonesia</Text>
                  </VStack>
                </HStack>
              </VStack>
              <VStack align="left">
                <Heading as="h6" size="md" mb="5">
                  Donations
                </Heading>
                <DonationCard />
              </VStack>
              <HStack mb="10" mt="5">
                <Button w="30%" colorScheme="yellow" variant="outline">
                  Share
                </Button>
                <Button w="70%" colorScheme="yellow" color="white">
                  Donate Now
                </Button>
              </HStack>
            </VStack>
          </Box>
          <Box w="35%" h="40px">
            <FloatingCard />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default FundraisingContent;
