import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const HumidityCard = () => {
	return (
		<Flex
			bg="white"
			w="lg"
			h="180px"
			boxShadow="md"
			p="48px"
			justifyContent="space-around"
			rounded="15px"
		>
			<Flex flexDirection="column" gap="4px">
				<Heading as="h4" fontSize="2xl" fontWeight="600">
					Humidity
				</Heading>
				<Text fontWeight="500">Amount water vapor</Text>
				<Heading as="h5" fontSize="2xl" fontWeight="600">
					87%
				</Heading>
			</Flex>
			<Flex></Flex>
		</Flex>
	);
};

export default HumidityCard;
