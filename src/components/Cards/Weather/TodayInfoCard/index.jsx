import React from "react";
import { Box, Flex, Heading, Text, HStack } from "@chakra-ui/react";
import { RiMapPinLine } from "react-icons/ri";

const TodayInfoCard = () => {
	return (
		<Flex
			bgImage="https://images.unsplash.com/photo-1612251276789-9b1a8f2add8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			bgSize="cover"
			w="full"
			h="xs"
			boxShadow="md"
			p="48px"
			justifyContent="space-around"
			rounded="15px"
		>
			<Flex flexDirection="column" w="50%" justifyContent="space-between">
				<HStack>
					<RiMapPinLine size="28px" />
					<Heading as="h3" fontWeight="600" fontSize="xl">
						Jakarta, Indonesia
					</Heading>
				</HStack>
				<Flex verticalAlign="top">
					<Heading as="h4" fontSize="7xl" fontWeight="500">
						26
					</Heading>
					<Heading as="h5" fontSize="3xl" fontWeight="600">
						°C
					</Heading>
				</Flex>
				<Flex>
					<Text></Text>
					<Text></Text>
				</Flex>
			</Flex>

			<Flex flexDirection="column" rounded="15px" w="50%">
				<Box
					position="absolute"
					zIndex="1"
					display="flex"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
					filter="auto"
					opacity="50%"
					w="450px"
					h="230px"
					bg="white"
					rounded="15px"
				></Box>
				<Flex zIndex="2" p="12px">
					Test
				</Flex>
			</Flex>
		</Flex>
	);
};

export default TodayInfoCard;
