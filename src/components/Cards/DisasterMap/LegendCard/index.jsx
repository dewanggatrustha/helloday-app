import React from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";

const LegendCard = () => {
	return (
		<Flex
			ml="970px"
			mt="12px"
			float="right"
			bg="white"
			p="12px"
			w="180px"
			h="240px"
			rounded="15px"
			flexDirection="column"
		>
			<Text fontSize="lg" fontWeight="semibold" mb="4px">
				Legends
			</Text>
			<Divider orientation="horizontal" mb="4px" />
			<Flex flexDirection="column" gap={2}>
				<Flex gap={2}>
					<RiMapPin2Fill color="#DD6B20" size="20px" />
					<Text>Earthquake</Text>
				</Flex>
				<Flex gap={2}>
					<RiMapPin2Fill color="#E53E3E" size="20px" />
					<Text>Fire</Text>
				</Flex>
				<Flex gap={2}>
					<RiMapPin2Fill color="#3182CE" size="20px" />
					<Text>Flood</Text>
				</Flex>
				<Flex gap={2}>
					<RiMapPin2Fill color="#38A169" size="20px" />
					<Text>Land Slide</Text>
				</Flex>
				<Flex gap={2}>
					<RiMapPin2Fill color="#805AD5" size="20px" />
					<Text>Tornado</Text>
				</Flex>
				<Flex gap={2}>
					<RiMapPin2Fill color="#D53F8C" size="20px" />
					<Text>Tsunami</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default LegendCard;
