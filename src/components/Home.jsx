import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<Box bgColor={"whiteAlpha.100"} w={"full"} h={"100vh"}>
			<motion.div
				style={{
					zIndex: 100,
					height: "70vh",
				}}
				animate={{
					translateY: "20px",
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				<Image
					w={"full"}
					h={"full"}
					objectFit={"contain"}
					src={btcSrc}
					filter={"grayscale(1)"}
					marginTop={20}
				/>
			</motion.div>

			<Text
				fontSize={"6xl"}
				zIndex={"1"}
				textAlign={"center"}
				fontWeight={"thin"}
				color={"black"}
				mt={"-25"}
			>
				Xcrypto
			</Text>
		</Box>
	);
};

export default Home;
