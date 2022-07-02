import React from "react";
import { Box, HStack, Text, Image, VStack } from "@chakra-ui/react";

interface DonationCardProps {
	image: string;
	alt: string;
	name: string;
	nominal: string;
	time: number;
	message?: string;
}

const DonationCard = ({
	image,
	alt,
	name,
	nominal,
	time,
	message,
}: DonationCardProps) => {
	return (
		<>
			<Box boxShadow="sm" p="6" rounded="md" bg="white" mb="5">
				<VStack align="left">
					<HStack>
						<Image
							src={image}
							alt={alt}
							boxSize="80px"
							borderRadius="full"
							mr="5"
							mb="5"
						/>
						<VStack align="left" spacing="5px">
							<Text fontWeight="bold" color="#FFA800">
								{name}
							</Text>
							<HStack>
								<Text>Donated Rp</Text>
								<Text fontWeight="bold">{nominal}</Text>
							</HStack>
							<Text fontSize="sm">{time} days ago</Text>
						</VStack>
					</HStack>
					<Text>{message}</Text>
				</VStack>
			</Box>
		</>
	);
};

export default DonationCard;
