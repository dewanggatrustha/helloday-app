import React from "react";
import {
	Box,
	Image,
	HStack,
	Text,
	VStack,
	Progress,
	LinkBox,
	LinkOverlay,
} from "@chakra-ui/react";

const ContentCard = ({
	imageAlt,
	imageUrl,
	title,
	desc,
	target,
	progress,
	achieved,
	link,
}) => {
	return (
		<>
			<LinkBox
				w="100%"
				overflow="hidden"
				boxShadow="md"
				rounded="15px"
				p="3"
				borderRadius="md"
			>
				<HStack spacing="24px" mt="3">
					<Box w="500px" h="150px">
						<Image src={imageUrl} alt={imageAlt} borderRadius="base" />
					</Box>
					<VStack spacing="5px">
						<Box w="100%" h="100%">
							<LinkOverlay
								href={link}
								fontWeight="bold"
								fontSize={18}
								mb="3"
							>
								{title}
							</LinkOverlay>
							<Text fontSize={15}>{desc}</Text>
						</Box>
						<Box w="100%">
							<Progress colorScheme="green" size="sm" value={progress} />
							<HStack mt="2" fontSize={13}>
								<Text>{achieved}</Text>
								<Text>raised from</Text>
								<Text>{target}</Text>
							</HStack>
						</Box>
					</VStack>
				</HStack>
			</LinkBox>
		</>
	);
};

export default ContentCard;
