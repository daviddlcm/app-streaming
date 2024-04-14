import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MoviePlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state;

  return (
    <VStack spacing={4} alignItems="stretch" bg="gray.900" minH="100vh">
      <Box bg="gray.800" p={4}>
        <Button leftIcon={<FaArrowLeft />} variant="ghost" colorScheme="whiteAlpha" onClick={() => navigate("/")}>
          Back
        </Button>
        <Text color="white" fontWeight="bold" fontSize="2xl" mt={4}>
          {movie.title}
        </Text>
      </Box>
      <Box flex={1}>{}</Box>
    </VStack>
  );
};

export default MoviePlayer;