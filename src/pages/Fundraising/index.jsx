import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	Divider,
	Stack,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import Carousel from "../../components/Carousel";
const Fundraising = () => {
	return (
		<>
			<Box
				m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
				bg={useColorModeValue("white", "blue")}
			>
				<Stack direction="row" h="30px" mb="10px">
					<Divider
						orientation="vertical"
						borderWidth="4px"
						rounded="full"
						borderColor="primary.500"
					/>
					<VStack align="left">
						<Heading as="h2" size="xl">
							Fundraising
						</Heading>
					</VStack>
				</Stack>
				<Heading as="h3" size="md" fontWeight="500">
					Text
				</Heading>
				<Flex>
					<Box>
						<Carousel />
						<Heading as="h5" size="lg" fontWeight="600">
							Recommended for You
						</Heading>
					</Box>
				</Flex>
				<Box>
					<Heading as="h5" size="lg" fontWeight="600">
						Urgent Fundraising
					</Heading>
					<Text>They need your help right away!</Text>
					{/* Card */}
				</Box>
				<Box>
					<Heading as="h5" size="lg" fontWeight="600">
						Latest Inspiration
					</Heading>
					<Flex justifyContent={"space-between"}>
						<Flex gap="4">
							<Image boxSize="350px" rounded="5px" />
							<Flex gap="4" flexDirection="column">
								<Image boxSize="210px" rounded="5px" />
								<Image
									boxSize="100px"
									src=""
									rounded="5px"
									filter="auto"
									brightness="40%"
								/>
							</Flex>
						</Flex>
						<Box>
							<Heading>Volunteer to Save the Planet</Heading>
							<Text>As the year comes to a close,</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default Fundraising;
