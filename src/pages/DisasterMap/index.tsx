import React from "react";
import {
	Box,
	Flex,
	Heading,
	Divider,
	Stack,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import HelloMap from "../../components/HelloMap";
import LatestDisasterCard from "../../components/Cards/DisasterMap/LatestDisasterCard";

const DisasterMap = () => {
	return (
		<>
			<Box
				m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
				bg={useColorModeValue("white", "blue")}
			>
				<Stack direction="row" h="30px" mb="14px">
					<Divider
						orientation="vertical"
						borderWidth="4px"
						rounded="full"
						borderColor="primary.500"
					/>
					<VStack align="left">
						<Heading as="h2" size="xl">
							Disaster Map
						</Heading>
					</VStack>
				</Stack>
				<Heading as="h3" size="md" fontWeight="500">
					View latest information about natural disaster that happened in
					the world especially in Indonesia!
				</Heading>
				<Divider mt="24px" mb="24px" />
				<Flex>
					<LatestDisasterCard />
					<Flex>
						<HelloMap />
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
export default DisasterMap;
