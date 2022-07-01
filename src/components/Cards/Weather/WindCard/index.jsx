import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const WindCard = () => {
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
					Wind Status
				</Heading>
				<Text fontWeight="500">Today Wind Speed</Text>
				<Heading as="h5" fontSize="2xl" fontWeight="600">
					5 km/h
				</Heading>
			</Flex>
			<Flex></Flex>
		</Flex>
	);
};

export default WindCard;
