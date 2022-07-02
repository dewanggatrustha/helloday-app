import React from "react";
import {
	Box,
	Flex,
	Heading,
	Divider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import EventCard from "../EventCard";
import disasterData from "../../../../data/DisasterData/disasterData.json";
import { MdOutlinePodcasts } from "react-icons/md";

const LatestDisasterCard = () => {
	return (
		<Flex
			position="absolute"
			zIndex="2"
			ml="12px"
			mt="12px"
			flexDirection="column"
			rounded="15px"
			bg="white"
			w="650px"
			h="695px"
			p="12px"
			alignItems="center"
		>
			<Flex w="93%" flexDirection="column">
				<Flex>
					<Box
						p={"4px 8px 4px 8px"}
						bg="primary.500"
						rounded="15px"
						mr="10px"
					>
						<Heading as="h4" fontSize="6xl" color="white">
							15
						</Heading>
					</Box>
					<Flex flexDirection="column">
						<Heading as="h5" fontSize="3xl" mt="1px">
							New Event
						</Heading>
						<Heading as="h6" fontSize="3xl" mt="1px">
							Latest Natural Disaster
						</Heading>
					</Flex>
				</Flex>
			</Flex>
			<Divider w="93%" mt="12px" mb="12px" />
			<Tabs variant="soft-rounded" colorScheme="green">
				<TabList>
					<Tab>Earthquake</Tab>
					<Tab>Fire</Tab>
					<Tab>Flood</Tab>
					<Tab>Land Slide</Tab>
					<Tab>Tornado</Tab>
					<Tab>Tsunami</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Flex gap="8px" flexDirection="column">
							{disasterData.earthquake.map((data) => (
								<EventCard
									city={data.properties.location}
									date={data.properties.date}
									anotherTitle="magnitudo"
									anotherDetail={data.properties.magnitudo}
								>
									<MdOutlinePodcasts />
								</EventCard>
							))}
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex gap="8px" flexDirection="column">
							{disasterData.fire.map((data) => (
								<EventCard
									city={data.properties.location}
									date={data.properties.date}
									// anotherTitle="magnitudo"
									// anotherDetail={data.properties.magnitudo}
								>
									{/* <MdOutlinePodcasts />  */}
									{/* Ganti Icon diatas sesuaiin dengan tambah detail. contohnya yang diatas itu earthquake nambah magnitudo */}
								</EventCard>
							))}
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex gap="8px" flexDirection="column">
							{disasterData.flood.map((data) => (
								<EventCard
									city={data.properties.location}
									date={data.properties.date}
									// anotherTitle="magnitudo"
									// anotherDetail={data.properties.magnitudo}
								>
									{/* <MdOutlinePodcasts /> */}
								</EventCard>
							))}
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex gap="8px" flexDirection="column">
							{disasterData.landSlide.map((data) => (
								<EventCard
									city={data.properties.location}
									date={data.properties.date}
									// anotherTitle="magnitudo"
									// anotherDetail={data.properties.magnitudo}
								>
									{/* <MdOutlinePodcasts /> */}
								</EventCard>
							))}
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex gap="8px" flexDirection="column">
							{disasterData.tornado.map((data) => (
								<EventCard
									city={data.properties.location}
									date={data.properties.date}
									// anotherTitle="magnitudo"
									// anotherDetail={data.properties.magnitudo}
								>
									{/* <MdOutlinePodcasts /> */}
								</EventCard>
							))}
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex gap="8px" flexDirection="column">
							{disasterData.tsunami.map((data) => (
								<EventCard
									city={data.properties.location}
									date={data.properties.date}
									// anotherTitle="magnitudo"
									// anotherDetail={data.properties.magnitudo}
								>
									{/* <MdOutlinePodcasts /> */}
								</EventCard>
							))}
						</Flex>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default LatestDisasterCard;
