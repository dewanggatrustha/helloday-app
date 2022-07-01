import React from "react";
import {
	Box,
	Heading,
	Divider,
	Stack,
	VStack,
	useColorModeValue,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Text,
	ListItem,
	OrderedList,
	UnorderedList,
	Image,
	Flex,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Grid,
	GridItem,
	Center,
} from "@chakra-ui/react";

import {
	earthquakeInformation,
	earthquakeInstruction,
	fireInformation,
	fireInstruction,
	floodInformation,
	floodInstruction,
	landSlideInformation,
	landSlideInstruction,
	tornadoInformation,
	tornadoInstruction,
	tsunamiInformation,
	tsunamiInstruction,
} from "../../data/InstructionData";

import emergencyData from "../../data/EmergencyData";
import EmergencyCard from "../../components/Cards/EmergencyCard";

const WhatToDo = () => {
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
							What-To-Do
						</Heading>
					</VStack>
				</Stack>
				<Heading as="h3" size="md" fontWeight="500">
					Tips and step that you should do when a natural disaster strikes.
				</Heading>
				<Tabs
					isFitted
					variant="enclosed"
					rounded="15"
					boxShadow="xs"
					mt="10px"
				>
					<TabList>
						<Tab>Instruction</Tab>
						<Tab>Emergency Calls</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Accordion defaultIndex={[0]} allowMultiple>
								<AccordionItem
									rounded="15"
									boxShadow="xs"
									w="100%"
									mb="12px"
								>
									<h2>
										<AccordionButton>
											<Box flex="1" textAlign="left">
												<Text fontSize="xl" fontWeight="600">
													{earthquakeInformation.disaster.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex>
											<VStack direction="row">
												<Image
													boxSize="360px"
													objectFit="cover"
													rounded="5px"
													mr="20px"
													src={
														earthquakeInformation.disaster
															.image[0]
													}
												/>
											</VStack>
											<VStack direction="column">
												<Center w="180px">
													<Box boxSize="sm">
														<Image
															boxSize="170px"
															objectFit="cover"
															rounded="5px"
															mb="20px"
															src={
																earthquakeInformation.disaster
																	.image[1]
															}
														/>
														<Image
															boxSize="120px"
															objectFit="cover"
															rounded="5px"
															src={
																earthquakeInformation.disaster
																	.image[2]
															}
														/>
													</Box>
												</Center>
											</VStack>
											<Center flex="1">
												<Box w="xl">
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="lg"
															fontWeight="500"
															color="white"
														>
															Definition
														</Text>
													</Box>
													<Text fontSize="md" mb="10px">
														{
															earthquakeInformation.disaster
																.definition
														}
													</Text>
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="md"
															fontWeight="500"
															color="white"
														>
															Step To Do
														</Text>
													</Box>
													{earthquakeInstruction.map((data) => (
														<>
															<UnorderedList>
																<ListItem
																	key={data.id}
																	fontWeight="500"
																>
																	{data.name}
																</ListItem>
															</UnorderedList>
															<OrderedList>
																<Text fontSize="md" mb="10px">
																	{data.step.map((list) => (
																		<ListItem>
																			{list}
																		</ListItem>
																	))}
																</Text>
															</OrderedList>
														</>
													))}
												</Box>
											</Center>
										</Flex>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem
									rounded="15"
									boxShadow="xs"
									w="100%"
									mb="12px"
								>
									<h2>
										<AccordionButton>
											<Box flex="1" textAlign="left">
												<Text fontSize="xl" fontWeight="600">
													{tsunamiInformation.disaster.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex>
											<VStack direction="row">
												<Image
													boxSize="360px"
													objectFit="cover"
													rounded="5px"
													mr="20px"
													src={
														tsunamiInformation.disaster.image[0]
													}
												/>
											</VStack>
											<VStack direction="column">
												<Center w="180px">
													<Box boxSize="sm">
														<Image
															boxSize="170px"
															objectFit="cover"
															rounded="5px"
															mb="20px"
															src={
																tsunamiInformation.disaster
																	.image[1]
															}
														/>
														<Image
															boxSize="120px"
															objectFit="cover"
															rounded="5px"
															src={
																tsunamiInformation.disaster
																	.image[2]
															}
														/>
													</Box>
												</Center>
											</VStack>
											<Center flex="1">
												<Box w="xl">
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="lg"
															fontWeight="500"
															color="white"
														>
															Definition
														</Text>
													</Box>
													<Text fontSize="md" mb="10px">
														{
															tsunamiInformation.disaster
																.definition
														}
													</Text>
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="md"
															fontWeight="500"
															color="white"
														>
															Step To Do
														</Text>
													</Box>
													{tsunamiInstruction.map((data) => (
														<>
															<UnorderedList>
																<ListItem
																	key={data.id}
																	fontWeight="500"
																>
																	{data.name}
																</ListItem>
															</UnorderedList>
															<OrderedList>
																<Text fontSize="md" mb="10px">
																	{data.step.map((list) => (
																		<ListItem>
																			{list}
																		</ListItem>
																	))}
																</Text>
															</OrderedList>
														</>
													))}
												</Box>
											</Center>
										</Flex>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem
									rounded="15"
									boxShadow="xs"
									w="100%"
									mb="12px"
								>
									<h2>
										<AccordionButton>
											<Box flex="1" textAlign="left">
												<Text fontSize="xl" fontWeight="600">
													{fireInformation.disaster.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex>
											<VStack direction="row">
												<Image
													boxSize="360px"
													objectFit="cover"
													rounded="5px"
													mr="20px"
													src={fireInformation.disaster.image[0]}
												/>
											</VStack>
											<VStack direction="column">
												<Center w="180px">
													<Box boxSize="sm">
														<Image
															boxSize="170px"
															objectFit="cover"
															rounded="5px"
															mb="20px"
															src={
																fireInformation.disaster
																	.image[1]
															}
														/>
														<Image
															boxSize="120px"
															objectFit="cover"
															rounded="5px"
															src={
																fireInformation.disaster
																	.image[2]
															}
														/>
													</Box>
												</Center>
											</VStack>
											<Center flex="1">
												<Box w="xl">
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="lg"
															fontWeight="500"
															color="white"
														>
															Definition
														</Text>
													</Box>
													<Text fontSize="md" mb="10px">
														{fireInformation.disaster.definition}
													</Text>
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="md"
															fontWeight="500"
															color="white"
														>
															Step To Do
														</Text>
													</Box>
													{fireInstruction.map((data) => (
														<>
															<UnorderedList>
																<ListItem
																	key={data.id}
																	fontWeight="500"
																>
																	{data.name}
																</ListItem>
															</UnorderedList>
															<OrderedList>
																<Text fontSize="md" mb="10px">
																	{data.step.map((list) => (
																		<ListItem>
																			{list}
																		</ListItem>
																	))}
																</Text>
															</OrderedList>
														</>
													))}
												</Box>
											</Center>
										</Flex>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem
									rounded="15"
									boxShadow="xs"
									w="100%"
									mb="12px"
								>
									<h2>
										<AccordionButton>
											<Box flex="1" textAlign="left">
												<Text fontSize="xl" fontWeight="600">
													{tornadoInformation.disaster.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex>
											<VStack direction="row">
												<Image
													boxSize="360px"
													objectFit="cover"
													rounded="5px"
													mr="20px"
													src={
														tornadoInformation.disaster.image[0]
													}
												/>
											</VStack>
											<VStack direction="column">
												<Center w="180px">
													<Box boxSize="sm">
														<Image
															boxSize="170px"
															objectFit="cover"
															rounded="5px"
															mb="20px"
															src={
																tornadoInformation.disaster
																	.image[1]
															}
														/>
														<Image
															boxSize="120px"
															objectFit="cover"
															rounded="5px"
															src={
																tornadoInformation.disaster
																	.image[2]
															}
														/>
													</Box>
												</Center>
											</VStack>
											<Center flex="1">
												<Box w="xl">
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="lg"
															fontWeight="500"
															color="white"
														>
															Definition
														</Text>
													</Box>
													<Text fontSize="md" mb="10px">
														{
															tornadoInformation.disaster
																.definition
														}
													</Text>
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="md"
															fontWeight="500"
															color="white"
														>
															Step To Do
														</Text>
													</Box>
													{tornadoInstruction.map((data) => (
														<>
															<UnorderedList>
																<ListItem
																	key={data.id}
																	fontWeight="500"
																>
																	{data.name}
																</ListItem>
															</UnorderedList>
															<OrderedList>
																<Text fontSize="md" mb="10px">
																	{data.step.map((list) => (
																		<ListItem>
																			{list}
																		</ListItem>
																	))}
																</Text>
															</OrderedList>
														</>
													))}
												</Box>
											</Center>
										</Flex>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem
									rounded="15"
									boxShadow="xs"
									w="100%"
									mb="12px"
								>
									<h2>
										<AccordionButton>
											<Box flex="1" textAlign="left">
												<Text fontSize="xl" fontWeight="600">
													{floodInformation.disaster.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex>
											<VStack direction="row">
												<Image
													boxSize="360px"
													objectFit="cover"
													rounded="5px"
													mr="20px"
													src={floodInformation.disaster.image[0]}
												/>
											</VStack>
											<VStack direction="column">
												<Center w="180px">
													<Box boxSize="sm">
														<Image
															boxSize="170px"
															objectFit="cover"
															rounded="5px"
															mb="20px"
															src={
																floodInformation.disaster
																	.image[1]
															}
														/>
														<Image
															boxSize="120px"
															objectFit="cover"
															rounded="5px"
															src={
																floodInformation.disaster
																	.image[2]
															}
														/>
													</Box>
												</Center>
											</VStack>
											<Center flex="1">
												<Box w="xl">
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="lg"
															fontWeight="500"
															color="white"
														>
															Definition
														</Text>
													</Box>
													<Text fontSize="md" mb="10px">
														{floodInformation.disaster.definition}
													</Text>
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="md"
															fontWeight="500"
															color="white"
														>
															Step To Do
														</Text>
													</Box>
													{floodInstruction.map((data) => (
														<>
															<UnorderedList>
																<ListItem
																	key={data.id}
																	fontWeight="500"
																>
																	{data.name}
																</ListItem>
															</UnorderedList>
															<OrderedList>
																<Text fontSize="md" mb="10px">
																	{data.step.map((list) => (
																		<ListItem>
																			{list}
																		</ListItem>
																	))}
																</Text>
															</OrderedList>
														</>
													))}
												</Box>
											</Center>
										</Flex>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem
									rounded="15"
									boxShadow="xs"
									w="100%"
									mb="12px"
								>
									<h2>
										<AccordionButton>
											<Box flex="1" textAlign="left">
												<Text fontSize="xl" fontWeight="600">
													{landSlideInformation.disaster.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex>
											<VStack direction="row">
												<Image
													boxSize="360px"
													objectFit="cover"
													rounded="5px"
													mr="20px"
													src={
														landSlideInformation.disaster.image[0]
													}
												/>
											</VStack>
											<VStack direction="column">
												<Center w="180px">
													<Box boxSize="sm">
														<Image
															boxSize="170px"
															objectFit="cover"
															rounded="5px"
															mb="20px"
															src={
																landSlideInformation.disaster
																	.image[1]
															}
														/>
														<Image
															boxSize="120px"
															objectFit="cover"
															rounded="5px"
															src={
																landSlideInformation.disaster
																	.image[2]
															}
														/>
													</Box>
												</Center>
											</VStack>
											<Center flex="1">
												<Box w="xl">
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="lg"
															fontWeight="500"
															color="white"
														>
															Definition
														</Text>
													</Box>
													<Text fontSize="md" mb="10px">
														{
															landSlideInformation.disaster
																.definition
														}
													</Text>
													<Box
														bg="primary.500"
														rounded="5px"
														p={"2px 2px 2px 2px"}
														w="100px"
														textAlign="center"
													>
														<Text
															fontSize="md"
															fontWeight="500"
															color="white"
														>
															Step To Do
														</Text>
													</Box>
													{landSlideInstruction.map((data) => (
														<>
															<UnorderedList>
																<ListItem
																	key={data.id}
																	fontWeight="500"
																>
																	{data.name}
																</ListItem>
															</UnorderedList>
															<OrderedList>
																<Text fontSize="md" mb="10px">
																	{data.step.map((list) => (
																		<ListItem>
																			{list}
																		</ListItem>
																	))}
																</Text>
															</OrderedList>
														</>
													))}
												</Box>
											</Center>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</TabPanel>
						<TabPanel>
							<Stack direction="row" h="50px">
								<VStack align="left">
									<Heading as="h3" size="md" fontWeight="500">
										The following is a list of emergency calls in the
										event of a disaster.
									</Heading>
								</VStack>
							</Stack>
							<Grid
								templateColumns={{
									base: "repeat(2, 1fr)",
									md: "repeat(2, 1fr)",
									lg: "repeat(3, 1fr)",
									xl: "repeat(4, 1fr)",
								}}
								gap="20px"
							>
								{emergencyData.map((data) => (
									<GridItem>
										<EmergencyCard
											key={data.id}
											name={data.name}
											image={data.image}
											alt={data.name}
											number={data.number}
										/>
									</GridItem>
								))}
							</Grid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
};

export default WhatToDo;
