import React from "react";
import {
	Box,
	Heading,
	HStack,
	useColorModeValue,
	Text,
	Image,
	Flex,
	IconButton,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const EmergencyCard = ({ name, image, number }) => {
	return (
		<Flex
			p="10px"
			boxShadow="md"
			w="300px"
			rounded="15px"
			bg={useColorModeValue("white", "blue")}
		>
			<Image
				boxSize="100px"
				objectFit="cover"
				boxShadow="xs"
				rounded="5px"
				mr="20px"
				src={image}
			/>

			<Box textAlign="center">
				<Heading fontSize="lg" fontWeight="600">
					{name}
				</Heading>
				<HStack mt="10px">
					<IconButton
						bg={useColorModeValue("primary.500")}
						color="white"
						aria-label="Call Segun"
						size="md"
						icon={<PhoneIcon />}
					/>
					<Text fontSize="lg" fontWeight="500" textAlign="center">
						{number}
					</Text>
				</HStack>
			</Box>
		</Flex>
	);
};

export default EmergencyCard;
