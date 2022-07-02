import React from "react";
import {
	Box,
	HStack,
	Text,
	Progress,
	VStack,
	Button,
	Divider,
} from "@chakra-ui/react";
import MiniDonationCard from "../../MiniDonationCard";
import donationData from "../../../../data/DonationData";

interface FloatingCardProps {
	totalRaised: String;
	maxRaised: string;
	totalPeopleDonation: string;
}

const FloatingCard = ({
	totalRaised,
	maxRaised,
	totalPeopleDonation,
}: FloatingCardProps) => {
	return (
		<Box boxShadow="md" p="6" rounded="md" bg="white" mb="5" w="100%">
			<VStack align="left">
				<HStack>
					<Text color="green" fontWeight="medium">
						{totalRaised}
					</Text>
					<Text>raised from</Text>
					<Text>{maxRaised}</Text>
				</HStack>
				<Progress colorScheme="green" size="sm" value={55.5} />
				<Text fontSize="xs">{totalPeopleDonation}</Text>
				<HStack>
					<Button w="30%" colorScheme="yellow" variant="outline">
						Share
					</Button>
					<Button w="70%" colorScheme="yellow" color="white">
						Donate Now
					</Button>
				</HStack>
				<Divider orientation="horizontal" />
				{donationData.map((data) => (
					<MiniDonationCard
						image={data.imgsrc}
						alt={data.alt}
						name={data.name}
						nominal={data.nominal}
					/>
				))}
			</VStack>
		</Box>
	);
};

export default FloatingCard;
