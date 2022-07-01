import React from "react";
import { Flex, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import ConditionCard from "../ConditionCard";

const PredictionCard = () => {
	return (
		<Flex
			bg="white"
			w="lg"
			h="100%"
			boxShadow="md"
			p="48px"
			rounded="15px"
			flexDirection="column"
		>
			<Heading as="h5" fontSize="xl">
				This Week
			</Heading>
			<Flex flexDirection="column">
				<Heading>Today</Heading>
				<Flex flexDirection="row">
					<Swiper spaceBetween={20}>
						<SwiperSlide>
							<ConditionCard />
						</SwiperSlide>
						<SwiperSlide>
							<ConditionCard />
						</SwiperSlide>
						<SwiperSlide>
							<ConditionCard />
						</SwiperSlide>
					</Swiper>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default PredictionCard;
