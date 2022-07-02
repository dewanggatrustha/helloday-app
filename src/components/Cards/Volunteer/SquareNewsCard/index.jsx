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

const SquareNewsCard = ({
	imageAlt,
	imageUrl,
	title,
	desc,
	editor,
	link,
}) => {
	return (
		<LinkBox to={link}
			boxSize="350px"
			overflow="hidden"
			align="left"
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
						objectFit="Cover"
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
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logo_Kompasdotcom.png/600px-Logo_Kompasdotcom.png"
									/>
								</GridItem>
								<GridItem colStart={2} colEnd={6}>
									<Text>{editor}</Text>
								</GridItem>
							</Grid>
						</Box>
					</VStack>
				</HStack>
			</Box>
		</LinkBox>
	);
};

export default SquareNewsCard;
