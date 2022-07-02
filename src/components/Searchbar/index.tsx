import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar = () => {
	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents="none"
				children={<SearchIcon color="gray.500" />}
			/>
			<Input
				variant="filled"
				placeholder="Search for a City or Places .."
				bg="white"
				boxShadow="sm"
				rounded="15px"
			/>
		</InputGroup>
	);
};

export default Searchbar;
