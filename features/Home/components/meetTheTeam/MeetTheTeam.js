import { Box, Flex, Text } from "@chakra-ui/react"
import { agents } from "./agentConsts"
import AgentCard from "./components/AgentCards/AgentCard"

const MeetTheTeam = () => {
  return (
    <Box 
      maxWidth="1080px"
      margin="0 auto"
      paddingY={{ base:"3rem", sm:"6rem" }}
    >
      <Text 
        fontSize={{ base:"4xl", sm:"5xl" }}
        lineHeight="shorter"
        fontWeight="light"
        paddingX="2rem"
        textAlign="center"
      >
        Meet The Toito Team

      </Text>
      <Text 
        fontWeight="light"
        fontSize="2xl"
        marginTop="1rem"
        marginBottom="3rem"
        paddingX="2rem"
        textAlign="center"
      >
        We provide a 24/7 service and the best in the industry. 
      </Text>
      <Flex 
        direction={{ base:"column", sm:"row" }}
        justifyContent="space-between"
        gap="1.5rem"
      >
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}

      </Flex>

    </Box>
  )
}

export default MeetTheTeam