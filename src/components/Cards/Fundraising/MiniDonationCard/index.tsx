import React from "react";
import { Box, HStack, Text, Image, VStack } from "@chakra-ui/react";

interface MiniDonationCardProps {
	image: string;
	alt: string;
	name: string;
	nominal: string;
}

const MiniDonationCard = ({
	image,
	alt,
	name,
	nominal,
}: MiniDonationCardProps) => {
	return (
		<>
			<Box rounded="md" bg="white" mb="5">
				<VStack align="left">
					<HStack>
						<Image
							src={image}
							alt={alt}
							boxSize="50px"
							borderRadius="full"
							mr="5"
							mb="5"
						/>
						<Text fontWeight="bold" fontSize="sm">
							{name}
						</Text>
						<Text fontSize="sm">just donated</Text>
						<Text fontSize="sm" fontWeight="bold">
							{nominal}
						</Text>
					</HStack>
				</VStack>
			</Box>
		</>
	);
};

export default MiniDonationCard;
