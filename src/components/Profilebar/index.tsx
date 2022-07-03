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
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

interface ProfileBarType {
	name: string;
	avatarImg?: string;
}

const ProfileBar = ({ name, avatarImg }: ProfileBarType) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
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
						icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
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
