import { Box, Fade, Text } from "@chakra-ui/react"
import HeroForm from "../HeroBanner/HeroForm"

const HeroBanner = () => {
  return (
    <Fade in>
      <Box 
        position="relative"
        minHeight={{ base:"110vh", sm:"70vh" }}
        backgroundImage={`url('./Hero/blog1.jpg')`}
        bgPosition="center"
        bgSize="cover"
        bgAttachment="fixed"
      >
        <Box 
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.85"
          backgroundColor="green.900"
        />
        <Box 
          display="flex"
          flexDirection={{ base:"column", sm:"row" }}
          alignItems="center"
          justifyContent={{ base:"flex-start", sm:"space-between" }}
          maxWidth="1200px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          top="0"
          bottom="0"
          margin="0 auto"
          padding="2rem"
        >
          <Box width={{ base:"100%", sm:"50%" }}>
            <Text 
              fontSize={{ base:"4xl", sm:"5xl" }}
              lineHeight="shorter"
              marginBottom="1.5rem"
            >
              Download our <strong> buying guide</strong>  today....
            </Text>
            <Text fontSize={{ base:"lg", sm:"2xl" }} >
              Free PDF with our best secrets for evaluating a property purchase, calculating profit and so much more...
            </Text>

          </Box>
          <Box width={{ base:"100%", sm:"auto" }} fontSize={{ base:"2rem", sm:"0" }}>
            <HeroForm />
          </Box>

        </Box>
        
      </Box>
    </Fade>
  )
}

export default HeroBanner