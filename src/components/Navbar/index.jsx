import React from "react";
import {
	Image,
	Flex,
	Avatar,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	useColorMode,
	Stack,
	Heading,
	Text,
	Box,
} from "@chakra-ui/react";
import {
	MoonIcon,
	SunIcon,
	CloseIcon,
	HamburgerIcon,
	BellIcon,
} from "@chakra-ui/icons";
import Logo from "../../logo.svg";
import NavLink from "./NavLink";
import NavData from "./NavData";
import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Router>
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
								{NavData.map((data) => (
									<NavLink key={data.id} to={data.to}>
										{data.name}
									</NavLink>
								))}
							</HStack>
						</HStack>
						<Flex gap="2" alignItems={"center"}>
							<Menu>
								<MenuButton
									as={Button}
									cursor={"pointer"}
									variant={"ghost"}
								>
									<BellIcon />
								</MenuButton>
								<MenuList>
									<MenuItem>
										<Box>Notification 1</Box>
									</MenuItem>
									<MenuDivider />
									<MenuItem>
										<Box>Notification 1</Box>
									</MenuItem>
								</MenuList>
							</Menu>
							<Menu>
								<MenuButton
									as={Button}
									variant={"ghost"}
									cursor={"pointer"}
									minW={0}
								>
									<HStack>
										<Avatar size={"sm"} src={""} />
										<Text
											fontWeight={500}
											display={{ base: "none", md: "flex" }}
										>
											Username
										</Text>
									</HStack>
								</MenuButton>
								<MenuList>
									<MenuItem
										onClick={toggleColorMode}
										icon={
											colorMode === "light" ? (
												<MoonIcon />
											) : (
												<SunIcon />
											)
										}
									>
										{colorMode === "light"
											? "Dark Mode"
											: "Light Mode"}
									</MenuItem>
									<MenuDivider />
									<MenuItem>Sign Out</MenuItem>
								</MenuList>
							</Menu>
						</Flex>
					</Flex>
				</Flex>
				{isOpen ? (
					<Flex m="12px" p="4px" display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{NavData.map((data) => (
								<NavLink key={data.id} to={data.to}>
									{data.name}
								</NavLink>
							))}
						</Stack>
					</Flex>
				) : null}
			</Box>
		</Router>
	);
};

export default Navbar;
