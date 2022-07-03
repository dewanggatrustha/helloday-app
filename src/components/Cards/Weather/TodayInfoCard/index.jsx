import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	HStack,
	VStack,
	Image,
} from "@chakra-ui/react";
import { RiMapPinLine } from "react-icons/ri";
import { TbTemperature } from "react-icons/tb";
import { WiCloud } from "react-icons/wi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import TemperatureStats from "../../../../assets/weather/Card/TemperatureStats.svg";

const TodayInfoCard = () => {
	return (
		<Flex
			bgImage="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
					<Heading as="h3" fontWeight="500" fontSize="xl">
						DKI Jakarta, Indonesia
					</Heading>
				</HStack>
				<Flex flexDirection="column">
					<Flex verticalAlign="top" pl="155px">
						<Heading as="h4" fontSize="7xl" fontWeight="500">
							26
						</Heading>
						<Heading as="h5" fontSize="3xl" fontWeight="500">
							°C
						</Heading>
					</Flex>
					<Heading as="h5" fontSize="xl" fontWeight="500" pl="145px">
						Mostly Clear
					</Heading>
				</Flex>
				<Flex>
					<HStack mr="24px">
						<TbTemperature size="22px" mt="2px" />
						<Text fontSize="lg" fontWeight="500">
							Feels like 28°C
						</Text>
					</HStack>
					<HStack ml="24px">
						<WiCloud size="22px" mt="2px" />
						<Text fontSize="lg" fontWeight="500">
							Cloudly - 0%
						</Text>
					</HStack>
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
					w="460px"
					h="245px"
					bg="white"
					rounded="15px"
				></Box>
				<Flex zIndex="2" p={"12px 24px 12px 36px"} flexDirection="column">
					<HStack>
						<MdOutlineTipsAndUpdates mt="1px" />
						<Text fontSize="lg" fontWeight="500">
							Temperature of the Day
						</Text>
					</HStack>
					<Image src={TemperatureStats} w="400px" />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default TodayInfoCard;
