import React from "react";
import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Text,
	VStack,
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
					<Box>
						<VStack>
							<Text fontWeight={600}>Earthquake - 5.2 SR</Text>
							<Text fontSize="xs">Sunday, July 3, 2022 - 12.43 WIB</Text>
							<Text fontSize="sm">Yogyakarta, DIY</Text>
						</VStack>
					</Box>
				</MenuItem>
				<MenuDivider />
				<MenuItem>
					<Box>
						<VStack>
							<Text fontWeight={600}>Tsunami - 40 Km</Text>
							<Text fontSize="xs">
								Tuesday, July 3, 2022 - 10.15 WIB
							</Text>
							<Text fontSize="sm">Pangandaran, West Java</Text>
						</VStack>
					</Box>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default Notificationbar;
