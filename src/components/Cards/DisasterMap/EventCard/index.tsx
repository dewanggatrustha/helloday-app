import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdOutlineDateRange } from "react-icons/md";

interface EventCardProps {
	city: string;
	date: string;
	anotherTitle: string;
	anotherDetail: string;
}

const EventCard = ({
	children,
	city,
	date,
	anotherTitle,
	anotherDetail,
}: EventCardProps) => {
	return (
		<Flex
			bg="white"
			w="full"
			h="140px"
			boxShadow="md"
			p={"24px 48px 24px 48px"}
			rounded="15px"
		>
			<Flex flexDirection="column" gap="4px">
				<Flex>
					<Heading as="h4" fontSize="2xl" fontWeight="600">
						{city}
					</Heading>
				</Flex>
				<Flex justifyItems="center" gap={8}>
					<Flex flexDirection="column">
						<Flex>
							<Box mt="3px">
								<MdOutlineDateRange />
							</Box>
							<Text fontWeight="600">Date</Text>
						</Flex>
						<Text fontWeight="600">{date}</Text>
					</Flex>
					<Flex flexDirection="column">
						<Flex>
							<Box mt="3px">{children}</Box>
							<Text fontWeight="600">{anotherTitle}</Text>
						</Flex>
						<Text fontWeight="600">{anotherDetail}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default EventCard;
