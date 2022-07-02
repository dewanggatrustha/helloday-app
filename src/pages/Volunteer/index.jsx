import React from "react";
import {
	Box,
	Text,
	Heading,
	Divider,
	Stack,
	HStack,
	VStack,
	useColorModeValue,
	Grid,
	GridItem,
	Image,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SquareVolunteerCard from "../../components/Cards/Volunteer/SquareVolunteerCard";
import VolunteerContentData from "../../data/VolunteerContentData";

const Volunteer = () => {
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
							Volunteers
						</Heading>
						<Heading as="h3" size="md" fontWeight="500">
							If you have a spare few hours we would love your support
						</Heading>
					</VStack>
				</Stack>
				<Grid templateColumns="repeat(3, 1fr)" mt="75px">
					<GridItem colStart={1} colEnd={3} h="30px" w="1000px" mr={5}>
						<Image
							borderRadius="15px"
							height="360px"
							width="100%"
							objectFit="Cover"
							src="https://www.indorelawan.org/blog/wp-content/uploads/2018/07/494296_620.jpg"
							alt="Volunteer"
						/>
					</GridItem>
					<GridItem w="100%" h="10">
						<Box
							as="button"
							borderRadius="md"
							bg="#F4CC3E"
							color="white"
							w="100%"
							px={4}
							h={107}
						>
							<Grid templateColumns="repeat(3,1fr)" h="100%">
								<GridItem h="100%">
									<InfoIcon w={50} h="100%" />
								</GridItem>
								<GridItem mt={2} colStart={2} colEnd={4}>
									<Text fontSize="3xl">Volunteer</Text>
									<Text fontSize="4xl" fontWeight="700">
										123,567
									</Text>
								</GridItem>
							</Grid>
						</Box>
						<Box
							mt={5}
							as="button"
							borderRadius="md"
							bg="#F4CC3E"
							color="white"
							w="100%"
							px={4}
							h={107}
						>
							<Grid templateColumns="repeat(3,1fr)" h="100%">
								<GridItem h="100%">
									<InfoIcon w={50} h="100%" />
								</GridItem>
								<GridItem mt={2} colStart={2} colEnd={4}>
									<Text fontSize="3xl">Community</Text>
									<Text fontSize="4xl" fontWeight="700">
										1,789
									</Text>
								</GridItem>
							</Grid>
						</Box>
						<Box
							mt={5}
							as="button"
							borderRadius="md"
							bg="#F4CC3E"
							color="white"
							w="100%"
							px={4}
							h={107}
						>
							<Grid templateColumns="repeat(3,1fr)" h="100%">
								<GridItem h="100%">
									<InfoIcon w={50} h="100%" />
								</GridItem>
								<GridItem mt={2} colStart={2} colEnd={4}>
									<Text fontSize="3xl">Activity</Text>
									<Text fontSize="4xl" fontWeight="700">
										4,321
									</Text>
								</GridItem>
							</Grid>
						</Box>
					</GridItem>
				</Grid>
				<Stack mt={350} direction="row" h="30px">
					<VStack align="left">
						<Heading as="h4" size="xl">
							Urgent Volunteers
						</Heading>
						<Heading as="h3" size="md" fontWeight="500">
							Helping Today, Helping Tomorrow, Let’s join to be Volunteer!
						</Heading>
					</VStack>
				</Stack>
				<Box overflowY="auto" width="100%" mt="10">
          <Heading as="h5" size="lg" fontWeight="600">
            Urgent Volunteer
          </Heading>
          <Text mt="2">Helping Today, Helping Tomorrow, Let’s join to be Volunteer!</Text>
          <HStack align="left" mt="5">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {VolunteerContentData.map((funddata) => {
                return (
                  <SwiperSlide>
                    <SquareVolunteerCard
                      imageUrl={funddata.imageUrl}
                      imageAlt={funddata.imageAlt}
                      title={funddata.title}
                      desc={funddata.desc}
                      progress={funddata.progress}
                      achieved={funddata.achieved}
                      target={funddata.target}
                      link={funddata.link}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </HStack>
        </Box>
			</Box>
		</>
	);
};

export default Volunteer;
