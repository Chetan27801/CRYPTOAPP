import { Button, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Box zIndex="999" position="fixed" top="0" left="0" right="0">
			<HStack spacing={"6"} padding="3" boxShadow="md" bgColor="#1A202C">
				<Button
					marginLeft={"3"}
					variant={"unstyled"}
					color={"white"}
					css={{
						"&:hover": {
							transform: "scale(1.2)",
						},
					}}
				>
					<Link to="/">Home</Link>
				</Button>
				<Button
					variant={"unstyled"}
					color={"white"}
					css={{
						"&:hover": {
							transform: "scale(1.2)",
						},
					}}
				>
					<Link to="/coins">Coins</Link>
				</Button>
				<Button
					variant={"unstyled"}
					color={"white"}
					css={{
						"&:hover": {
							transform: "scale(1.2)",
						},
					}}
				>
					<Link to="/exchanges">Exchanges</Link>
				</Button>
			</HStack>
		</Box>
	);
};

export default Header;
