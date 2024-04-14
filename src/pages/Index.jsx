import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, VStack, HStack, Text, Image, Button, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { FaPlay, FaHome, FaSearch, FaUser, FaFilm } from "react-icons/fa";

const Index = () => {
  const movies = [
    { title: "Movie 1", image: "https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDF8ZW58MHx8fHwxNzEzMDgwMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 2", image: "https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDJ8ZW58MHx8fHwxNzEzMDgwMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Movie 3", image: "https://images.unsplash.com/photo-1533319417894-6fbb331e5513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDN8ZW58MHx8fHwxNzEzMDgwMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const navigate = useNavigate();

  return (
    <Flex minH="100vh" bg="gray.900">
      {/* Left Navbar */}
      <VStack w="200px" bg="gray.800" p={4} spacing={8} alignItems="stretch" justifyContent="space-between">
        <VStack spacing={8} alignItems="stretch">
          <IconButton icon={<FaHome />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
          <IconButton icon={<FaSearch />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
          <IconButton icon={<FaFilm />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
        </VStack>
        <IconButton icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" size="lg" />
      </VStack>

      {/* Right Content */}
      <VStack flex={1} p={8} spacing={8} alignItems="stretch" minH="0">
        <Text fontSize="4xl" fontWeight="bold" color="white">
          Movies
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {movies.map((movie, index) => (
            <GridItem key={index}>
              <VStack spacing={4} p={4} bg="gray.700" borderRadius="md" alignItems="stretch">
                <Image src={movie.image} borderRadius="md" />
                <HStack justifyContent="space-between">
                  <Text color="white" fontWeight="bold">
                    {movie.title}
                  </Text>
                  <Button leftIcon={<FaPlay />} colorScheme="purple" size="sm" variant="solid" onClick={() => navigate(`/movie/${index}`, { state: { movie } })}>
                    Play
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Index;