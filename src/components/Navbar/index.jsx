import React from "react";
import {
	Image,
	Flex,
	HStack,
	IconButton,
	useDisclosure,
	useColorModeValue,
	Stack,
	Heading,
	Box,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../../logo.svg";
import NavLink from "./NavLink";
import NavData from "./NavData";
import ProfileBar from "../Profilebar";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			as="nav"
			top="0"
			pos="fixed"
			zIndex="200"
			w="100%"
			pt="12px"
			pb="12px"
			boxShadow={"sm"}
			bg={useColorModeValue("white", "blue")}
			backdropFilter="saturate(180%) blur(24px)"
		>
			<Flex>
				<Flex
					ml={{ base: "12px", md: "48px" }}
					mr={{ base: "12px", md: "48px" }}
					w="100%"
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
						transition="all 0.3s"
					/>
					<HStack spacing={8} alignItems={"center"}>
						<HStack display={{ base: "none", md: "flex" }}>
							<Image src={Logo} />
							<Heading as={"h1"} fontSize={"2xl"}>
								Hello Day!
							</Heading>
						</HStack>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
						<Flex gap="2" alignItems={"center"}>
							<ProfileBar name="Username" />
						</Flex>
					</Flex>
				</Flex>
				{isOpen ? (
					<Flex m="12px" p="4px" display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{NavData.map((data) => (
								<NavLink
									key={data.id}
									to={data.to}
									name={data.name}
								></NavLink>
							))}
						</HStack>
					</HStack>
					<Flex gap="2" alignItems={"center"}>
						<ProfileBar name="Username" />
					</Flex>
				</Flex>
			</Flex>
			{isOpen ? (
				<Flex m="12px" p="4px" display={{ md: "none" }}>
					<Stack as={"nav"} spacing={4}>
						{NavData.map((data) => (
							<NavLink
								key={data.id}
								to={data.to}
								name={data.name}
							></NavLink>
						))}
					</Stack>
				</Flex>
			) : null}
		</Box>
	);
};

export default Navbar;
