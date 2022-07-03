import React from "react";
import { useDispatch } from "react-redux";
import {
	Box,
	Flex,
	Heading,
	Divider,
	Stack,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";

const VolunteerForm = () => {
	const dispatch = useDispatch();

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
							Volunteer Registration Form
						</Heading>
					</VStack>
				</Stack>
				<Heading as="h3" size="md" fontWeight="500">
					One step away before you can help people who in need..
				</Heading>

				<Flex mt="24px" flexDirection="column">
					{/* Form */}
				</Flex>
			</Box>
		</>
	);
};

export default VolunteerForm;
