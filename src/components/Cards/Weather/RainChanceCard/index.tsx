import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import RainChanceIcon from "../../../../assets/weather/Card/RainChanceIcon.png";

const RainChanceCard = () => {
	return (
		<Flex
			bg="#EDF3F8"
			w="lg"
			h="180px"
			boxShadow="md"
			p="48px"
			justifyContent="space-around"
			rounded="15px"
		>
			<Flex flexDirection="column" gap="4px">
				<Heading as="h4" fontSize="2xl" fontWeight="600">
					Rain Chance
				</Heading>
				<Text fontWeight="500">Today Rain Chance</Text>
				<Heading as="h5" fontSize="2xl" fontWeight="600">
					28%
				</Heading>
			</Flex>
			<Flex>
				<Image src={RainChanceIcon} />
			</Flex>
		</Flex>
	);
};

export default RainChanceCard;
