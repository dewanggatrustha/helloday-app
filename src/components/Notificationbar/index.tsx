import React from "react";
import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const Notificationbar = () => {
	return (
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
	);
};

export default Notificationbar;
