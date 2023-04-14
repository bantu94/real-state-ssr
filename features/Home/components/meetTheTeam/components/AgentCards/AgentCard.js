import { Box, Image, Text } from "@chakra-ui/react"

const AgentCard = ({ name, image, description, title}) => {
  return (
    <Box 
      backgroundColor="#f1f1f14a"
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginBottom={{ base:"1rem", sm:"0" }}
      textAlign="center"
    >
      <Image 
        src={image}
        width="10rem"
        height="10rem"
        objectFit="cover"
        borderRadius="full"
        marginBottom="2rem"
        shadow="md"
      />
      <Text fontSize="xl" fontWeight="bold" color="green.400">
        {name}
      </Text>

      <Text fontSize="lg" color="green.600">
        {title}
      </Text>

      <Text 
        fontSize="md" 
        fontWeight="ligh" 
        noOfLines="4" 
        color="gray.600" 
        marginTop="1rem"
      >
        {description}
      </Text>
    </Box>
  )
}

export default AgentCard