import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { WiDaySunny } from "react-icons/wi";

const ConditionCard = () => {
	return (
		<Flex
			flexDirection="column"
			boxShadow="xs"
			p="12px"
			maxW="100px"
			rounded="15px"
			bg="white"
		>
			<Text>Now</Text>
			<WiDaySunny />
			<Text>27°C</Text>W
		</Flex>
	);
};

export default ConditionCard;
