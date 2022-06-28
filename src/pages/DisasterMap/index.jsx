import React from "react";
import {
	Box,
	Heading,
	Divider,
	Stack,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";

const DisasterMap = () => {
	return (
		<>
			<Box
				m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
				bg={useColorModeValue("white", "blue")}
			>
				<Stack direction="row" h="30px">
					<Divider
						orientation="vertical"
						borderWidth="4px"
						rounded="full"
						borderColor="primary.500"
					/>
					<VStack align="left">
						<Heading as="h4" size="xl">
							Disaster Map
						</Heading>
						<Heading as="h3" size="md" fontWeight="500">
							View latest information about natural disaster that
							happened in the world especially in Indonesia!
						</Heading>
					</VStack>
				</Stack>
				{/* Ngoding Disini */}
			</Box>
		</>
	);
};
export default DisasterMap;
