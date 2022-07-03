import React from "react";
import {
	Box,
	Grid,
	GridItem,
	Heading,
	Divider,
	Stack,
	VStack,
	useColorModeValue,
	Flex,
} from "@chakra-ui/react";
import WindCard from "../../components/Cards/Weather/WindCard";
import PressureCard from "../../components/Cards/Weather/PressureCard";
import TodayInfoCard from "../../components/Cards/Weather/TodayInfoCard";
import RainChanceCard from "../../components/Cards/Weather/RainChanceCard";
import UVIndexCard from "../../components/Cards/Weather/UVIndexCard";
import PredictionCard from "../../components/Cards/Weather/PredictionCard";

const Weather = () => {
	return (
		<>
			<Box
				m={{
					base: "88px 12px 0px 12px",
					md: "88px 48px 0px 48px",
				}}
				bg={useColorModeValue("white", "blue")}
			>
				<Stack direction="row" h="30px" mb="12px">
					<Divider
						orientation="vertical"
						borderWidth="4px"
						rounded="full"
						borderColor="primary.500"
					/>
					<VStack align="left">
						<Heading as="h4" size="xl">
							Weather
						</Heading>
					</VStack>
				</Stack>
				<Heading as="h3" size="md" fontWeight="500">
					Greet your Day with latest information about the weather in your
					area..
				</Heading>
				<Flex mt="24px" justifyContent="space-between">
					<Flex flexDirection="column" gap="20px">
						<TodayInfoCard />
						<Grid
							templateColumns={{
								base: "repeat(2, 1fr)",
								md: "repeat(2, 1fr)",
							}}
							gap="20px"
						>
							<GridItem>
								<WindCard />
							</GridItem>
							<GridItem>
								<PressureCard />
							</GridItem>
							<GridItem>
								<RainChanceCard />
							</GridItem>
							<GridItem>
								<UVIndexCard />
							</GridItem>
						</Grid>
					</Flex>
					<Flex></Flex>
				</Flex>
			</Box>
		</>
	);
};

export default Weather;
