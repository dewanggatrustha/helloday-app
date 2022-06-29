import React from "react";
import {
	Avatar,
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorMode,
	Text,
	Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, BellIcon } from "@chakra-ui/icons";

const ProfileBar = ({ name, avatarImg }) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			{" "}
			<Menu>
				<MenuButton as={Button} cursor={"pointer"} variant={"ghost"}>
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
						<Avatar size={"sm"} src={avatarImg} />
						<Text fontWeight={500} display={{ base: "none", md: "flex" }}>
							{name}
						</Text>
					</HStack>
				</MenuButton>
				<MenuList>
					<MenuItem
						onClick={toggleColorMode}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					>
						{colorMode === "light" ? "Dark Mode" : "Light Mode"}
					</MenuItem>
					<MenuDivider />
					<MenuItem>Sign Out</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

export default ProfileBar;
