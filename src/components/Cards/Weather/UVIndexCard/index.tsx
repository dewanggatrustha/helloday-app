import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import UVIndexIcon from "../../../../assets/weather/Card/UVIndexIcon.png";

const UVIndexCard = () => {
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
					UV Index
				</Heading>
				<Text fontWeight="500">Today UV Index</Text>
				<Heading as="h5" fontSize="2xl" fontWeight="600">
					8.9
				</Heading>
			</Flex>
			<Flex>
				{" "}
				<Image src={UVIndexIcon} />
			</Flex>
		</Flex>
	);
};

export default UVIndexCard;
