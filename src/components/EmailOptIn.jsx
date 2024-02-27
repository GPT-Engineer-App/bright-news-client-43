import React from "react";
import { Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

const EmailOptIn = () => {
  const backgroundColor = "yellow.300";
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="full" bg="blue.800" p={8} color={textColor} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Get the latest tech news straight to your inbox!
      </Text>
      <Input placeholder="Enter your email..." size="lg" mb={4} />
      <Button size="lg" backgroundColor="white" color="blue.800" _hover={{ bg: "blue.100" }}>
        Subscribe Now
      </Button>
      <Text fontSize="lg" mt={2}>
        Join our exclusive list for daily insights that keep you one step ahead in the tech world.
      </Text>
    </Box>
  );
};

export default EmailOptIn;
