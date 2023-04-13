import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from 'react-icons/hi2';
import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {
  return (
    <Box 
    color='green.400'
    paddingY="2rem"
    backgroundColor="white"
    display={{ base:"none", md:"block" }}
    >
      <Box maxWidth="1200px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href={'/'}>
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="40" />
              <Text fontSize="2xl" fontWeight='black'>
                Toito
              </Text>
            </Box>
          </Link>

          <Flex gap={'12'} alignItems="center" fontWeight="medium">
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}

            <Button
            padding="1.6rem"
            fontSize='0.8rem'
            fontWeight="meduim"
            textStyle="uppercase"
            colorScheme="twitter"
            > 
              CREATE LISTING
            </Button>
          </Flex>

        </Flex>
      </Box>
    </Box>
  )
}

export default NavigationDesktop

const NavigationLink = ({title, link, icon}) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  )
};