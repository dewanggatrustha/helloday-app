import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	Divider,
	Stack,
	VStack,
	Spacer,
	useColorModeValue,
	HStack,
	Button,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "../../components/Carousel";
import ContentCard from "../../components/Cards/Fundraising/ContentCard";
import SquareContentCard from "../../components/Cards/Fundraising/SquareContentCard";
import FundraisingContentData from "../../data/FundraisingContentData";
import "swiper/css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Fundraising() {
	const imageLI = [
		"https://www.indorelawan.org/blog/wp-content/uploads/2018/07/494296_620.jpg",
		"https://sukabumiupdate.com/uploads/news/images/inline/200203174206-164.jpg",
		"https://cdn.medcom.id/dynamic/content/2021/04/16/1266534/lujhY9mst1.jpg?w=480",
	];

	return (
		<>
			<Box
				m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
				bg={useColorModeValue("white", "blue")}
				pb="10"
			>
				<Stack direction="row" h="30px" mb="10px">
					<Divider
						orientation="vertical"
						borderWidth="4px"
						rounded="full"
						borderColor="primary.500"
					/>
					<VStack align="left">
						<Heading as="h2" size="xl">
							Fundraising
						</Heading>
					</VStack>
				</Stack>
				<Heading as="h3" size="md" fontWeight="500" mt="5" mb="5">
					Help people around you
				</Heading>

				<Flex>
					<Box w="50%">
						<Carousel />
					</Box>
					<Spacer />
					<Box w="50%" ml="5">
						<Heading as="h3" size="md" fontWeight="600">
							Recommended For You
						</Heading>
						{FundraisingContentData.slice(0, 2).map((funddata) => {
							return (
								<ContentCard
									imageUrl={funddata.imageUrl}
									imageAlt={funddata.imageAlt}
									title={funddata.title}
									desc={funddata.desc}
									progress={funddata.progress}
									achieved={funddata.achieved}
									target={funddata.target}
									link={funddata.link}
								/>
							);
						})}
					</Box>
				</Flex>

				<Box overflowY="auto" width="100%" mt="10">
					<Heading as="h5" size="lg" fontWeight="600">
						Urgent Fundraising
					</Heading>
					<Text mt="2">They need your help right away!</Text>
					<HStack align="left" mt="5">
						<Swiper
							spaceBetween={50}
							slidesPerView={4}
							onSlideChange={() => console.log("slide change")}
							onSwiper={(swiper) => console.log(swiper)}
						>
							{FundraisingContentData.map((funddata) => {
								return (
									<SwiperSlide>
										<SquareContentCard
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

				<Box mt="10">
					<Heading as="h5" size="lg" fontWeight="600">
						Latest Inspiration
					</Heading>
					<Flex justifyContent={"space-between"} mt="5">
						<Flex gap="4">
							<Image w="600px" h="350" rounded="5px" src={imageLI[0]} />
							<Flex gap="4" flexDirection="column" w="280px">
								<Image src={imageLI[1]} w="100%" rounded="5px" />
								<Image
									w="150px"
									h="100px"
									src={imageLI[2]}
									rounded="5px"
									filter="auto"
									brightness="40%"
								/>
							</Flex>
						</Flex>

						<Box w="800px">
							<Heading mb="5">Volunteer to Save the Planet</Heading>
							<Text mb="2">
								In life, of course, you have various activities that
								take up your time. Whether it's studying, working,
								joining this organization, local to international
								seminars, or even the Olympics that promise your bright
								future. However, have you ever felt an empty space in
								your heart? That empty space that even your
								international achievements can't heal.
							</Text>
							<Text mb="5">
								Eventually, you realize that you are so focused on
								yourself that you forget about other people around you.
								Your life should not only be meaningful to you, but your
								life must also be meaningful to others. If Barack Obama
								said, do good things, then you will fill the world with
								hope, you will also fill yourself with hope. This is the
								reason why you should try volunteering, even if only
								once in your life.
							</Text>
							<Link to="/volunteer">
								<Button colorScheme="yellow" color="white">
									Join as a Volunteer
								</Button>
							</Link>
						</Box>
					</Flex>
				</Box>

				<Box mt="10" overflowY="auto" width="100%">
					<Heading as="h5" size="lg" fontWeight="600">
						Ongoing Fundraising
					</Heading>
					<Text mt="2">Donate Now and Give the Gift of Life</Text>
					<HStack align="left" mt="5">
						<Swiper
							spaceBetween={50}
							slidesPerView={4}
							onSlideChange={() => console.log("slide change")}
							onSwiper={(swiper) => console.log(swiper)}
						>
							{FundraisingContentData.map((funddata) => {
								return (
									<SwiperSlide>
										<SquareContentCard
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
}

export default Fundraising;
