import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { testimonials } from "./testmonialConsts"
import TestimonialCard from "./TestimonialCards/TestimonialCard"

const Testimonials = () => {
  return (
    <Box bgColor={'green.50'}>
      <Box 
      maxWidth="1200px"
      margin="0 auto"
      paddingY={{ base:"3rem", sm:"6rem" }}
      >
        <Text 
        fontSize={{ base:"4xl", sm:"5xl" }}
        fontWeight="light"
        paddingX="2rem"
        textAlign="center"
        >
          Testimonials
        </Text>
        <Text 
        fontSize="2xl"
        fontWeight="light"
        marginTop="1rem"
        marginBottom="3rem"
        textAlign="center"
        paddingX="2rem"
        >
          A word from our valued clients
        </Text>

        <SimpleGrid 
        columns="3"
        minChildWidth="300px"
        gap={{ base:"0.5rem", sm:"2.5rem" }}
        >
          {testimonials.map((testimonials) => (
            <TestimonialCard key={testimonials} {...testimonials} />
          ))}

        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Testimonials