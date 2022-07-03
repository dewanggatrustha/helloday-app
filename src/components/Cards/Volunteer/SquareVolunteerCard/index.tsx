import React from "react";
import {
	Box,
	Image,
	HStack,
	Text,
	VStack,
	LinkBox,
	LinkOverlay,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface SquareVolunteerCardProps {
	imageAlt: string;
	imageUrl: string;
	title: string;
	desc: string;
	koordinator: string;
	achieved: string;
	link: string;
}
const SquareVolunteerCard = ({
	imageAlt,
	imageUrl,
	title,
	desc,
	koordinator,
	achieved,
	link,
}: SquareVolunteerCardProps) => {
	return (
		<LinkBox
			border="1px"
			borderColor="gray.100"
			borderRadius="10px"
			boxSize="350px"
			overflow="hidden"
			// align= 'right' as 'right'
			boxShadow="md"
			ml="2"
			mr="5"
			p="5"
			mb="2"
		>
			<Box>
				<VStack>
					<Image
						w="300px"
						h="120"
						objectFit="cover"
						src={imageUrl}
						alt={imageAlt}
						borderRadius="base"
					/>
				</VStack>
				<HStack spacing="24px" mt="2">
					<VStack spacing="5px">
						<Box w="100%">
							<LinkOverlay href={link} fontWeight="bold" fontSize={14} mb="3">
								{title}
							</LinkOverlay>
							<Text align="left" fontSize={12} mb="2">
								{desc}
							</Text>
						</Box>
						<Box w="100%">
							<Grid templateColumns="repeat(6, 1fr)">
								<GridItem colEnd={2}>
									<Image
										w={7}
										h={7}
										src="http://logistik.bnpb.go.id/inalogpb/assets/img/Logo%20bnpb-01.png"
									/>
								</GridItem>
								<GridItem colStart={2} colEnd={6}>
									<Text>{koordinator}</Text>
								</GridItem>
							</Grid>
							<HStack mt="2" fontSize={12}>
								<Text>{achieved} Relawan Telah Bergabung disini</Text>
							</HStack>
						</Box>
						<Link to="/register">
							<Box
								boxShadow="xl"
								as="button"
								borderRadius="md"
								bg="#F4CC3E"
								color="white"
								px={4}
								h={8}
							>
								Bergabung Jadi Relawan
							</Box>
						</Link>
					</VStack>
				</HStack>
			</Box>
		</LinkBox>
	);
};

export default SquareVolunteerCard;
